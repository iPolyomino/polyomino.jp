# polyomino.jp の作業ガイド

このガイドはリポジトリ全体に適用する。ユーザーから明示された指示を優先する。

## 構成と実装方針

- 個人ポートフォリオ、ブログ、Webツール、アプリのサポートページを公開するサイト。
- TypeScript、Next.js Pages Router、React、MUIを使用する。依存関係は `package.json` と `package-lock.json` で管理し、npmを使う。
- `pages/`: ページとルーティング。`components/`: UI。`lib/`: 共通処理。`contents/`: Markdown・JSONの本文。`public/`: 静的アセット。
- Markdownの読み込みは `lib/api.ts`、HTML変換は `lib/markdown.ts` を再利用する。ブログ本文は `contents/posts/` に置く。
- UIは既存のMUIコンポーネントと構成に合わせる。記事本文や言語切り替えは `ContentsCard` を使い、白背景と余白を維持する。
- `next.config.js` は `output: 'export'`、`trailingSlash: false`。新しい動的ページは静的生成に対応させる。サーバー実行が必要な機能を追加する前に、この構成との整合を確認する。
- `.next/`、`out/`、`coverage/`、`*.tsbuildinfo` は生成物。ソースを修正し、生成物を直接編集しない。

## 開発・検証・公開

| 目的 | コマンド |
|---|---|
| 依存関係の初回インストール | `npm ci` |
| 開発サーバー | `npm run dev` |
| lint | `npm run lint` |
| テスト | `npm test -- --runInBand` |
| 型チェック | `npx tsc --noEmit` |
| 本番ビルド・静的エクスポート | `npm run build` |
| ビルド済みサイトのローカル確認 | `npm run preview` |
| Cloudflareへのデプロイ | `npm run deploy` |

- CIはNode.js 24でlintとテストを実行する。`.githooks/pre-commit` もlintとテストを実行する。
- 変更箇所に応じた検証を実施する。ページ追加・ルーティング・静的生成の変更はビルドで確認する。文書のみの変更は参照先・内容・差分を確認すればよい。
- UIテストは `components/*.test.tsx`、ロジックのテストは `lib/**/*.spec.ts` に置く。`pages` 配下にテストを置くとページとして扱われるため避ける。
- テストはURL、言語、表示内容など利用者に影響する振る舞いを検証する。検証結果と未実施の確認を報告する。
- 公開設定は `wrangler.jsonc`。Cloudflare Worker `polyomino-jp` が `out/` を配信する。公開作業では先にビルドを完了し、ビルド成功とデプロイ成功を区別して報告する。

## ページの言語設定

本文が日本語と英語の混在なら `ja`、英語のみなら `en` とする。
TRPG DICE の翻訳ページは対応する BCP 47 言語タグを使用する。
言語選択リンクの表示名だけで本文の言語を判定しない。

### 実装箇所

- `lib/pageLanguage.ts`: サイト全体の言語判定。英語ページを明示し、その他は `ja` を既定値とする。
- `lib/trpgDiceLanguages.ts`: TRPG DICE の対応言語、表示名、言語判定。
- `pages/_document.tsx`: `__NEXT_DATA__.page` と `query.language` から、生成HTMLの `<html lang>` を設定する。
- `pages/_app.tsx`: 同じ判定処理を使用し、クライアント側の画面遷移時にも `document.documentElement.lang` を更新する。

新規ページは本文を確認し、英語のみなら `englishPages` にルートを追加する。
動的ページの判定には `/blog/[id]` のようなルートパターンが渡る。
以下の表と実装が異なる場合は実装を確認し、要求された変更に合わせて双方を更新する。

### URLとlang属性

URLは `https://polyomino.jp` からの相対パス。

| URL | lang |
|---|---|
| `/` | `ja` |
| `/aboutme` | `ja` |
| `/blog` | `ja` |
| `/blog/{記事ID}`（全記事） | `ja` |
| `/lsnl` | `ja` |
| `/support/chronica` | `ja` |
| `/support/chronica-usage` | `ja` |
| `/hobby` | `en` |
| `/dtnsim` | `en` |
| `/hit-and-blow/asobi` | `en` |
| `/hit-and-blow/solver` | `en` |
| `/morse` | `en` |
| `/morse/quiz` | `en` |
| `/support/rhythmorse` | `en` |
| `/support/text2unicode` | `en` |
| `/support/trpg-dice` | `en` |
| `/support/trpg-dice/ja` | `ja` |
| `/support/trpg-dice/ko` | `ko` |
| `/support/trpg-dice/zh-Hans` | `zh-Hans` |
| `/support/trpg-dice/zh-Hant` | `zh-Hant` |
| `/support/trpg-dice/de` | `de` |
| `/support/trpg-dice/fr` | `fr` |
| `/support/trpg-dice/es` | `es` |
| `/support/trpg-dice/pt` | `pt` |
| `/support/trpg-dice/it` | `it` |
| 404・エラーページ（`/404`、内部ルート `/_error`） | `en` |

## TRPG DICEの更新

- 英語版の公開先は `/support/trpg-dice`。`/support/trpg-dice/en` は生成しない。
- 元資料は隣接リポジトリ `../trpg-dice/docs/privacy/`。地域別ではなく言語別に管理する。ポルトガル語は `pt`、繁体字は `zh-Hant` に統一し、旧URLの `pt-BR`・`zh-Hant-HK` は生成せず、リダイレクトも設けない。
- 既存の台湾版は `zh-Hant` を使用する。`zh-Hant-TW` へのURL変更は未実施なので、標準化を理由に自動変更しない。
- 言語切り替えの英語リンクはルートへ、その他は対応する言語URLへ向ける。リンクの `lang` と `hrefLang` にも言語タグを設定する。
- 言語切り替えは本文と同じ `ContentsCard` を使い、白背景を維持する。
- 本文は `contents/trpg-dice-privacy-policy.md`（英語のルート用）と `contents/trpg-dice-privacy-policy/{言語タグ}.md`。英語の両ファイルは一致させる。

### 言語設定の検証

言語ルールを変える際は `lib/pageLanguage.spec.ts` と `lib/trpgDiceLanguages.spec.ts` を更新する。
TRPG DICEのURL・本文読み込み・言語リンクの検証は `components/TRPGPrivacyPage.test.tsx` にある。
言語判定やDocumentを変更した場合は `out/**/*.html` の `<html lang>` も確認する。
ブラウザで検証する場合は言語ページ間のクライアント遷移にも確認対象を広げる。
