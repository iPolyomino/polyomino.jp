import ContentsCard from "@/components/ContentsCard";

import Link from "next/link";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ChronicaUsage = () => {
  return (
    <ContentsCard>
      <header>
        <h1>Chronicaの使い方・サポート</h1>

        <p>
          Chronicaは、自分や家族などの人物を中心に、人生の予定や出来事を整理できるアプリです。
          このページでは、基本的な使い方、よくある質問、お問い合わせ方法を説明します。
        </p>
      </header>

      <section>
        <h2>はじめての使い方</h2>

        <section>
          <h3>1. まずは人物を登録します</h3>

          <p>
            Chronicaでは、カレンダーの予定だけを管理するのではなく、
            「誰に関係する出来事か」を中心にライフイベントを整理します。
          </p>

          <p>
            はじめに、自分、配偶者、子ども、親、親族など、管理したい人物を登録してください。
          </p>

          <h4>登録する人物の例</h4>

          <ul>
            <li>自分</li>
            <li>配偶者</li>
            <li>子ども</li>
            <li>父母</li>
            <li>祖父母</li>
            <li>親族</li>
          </ul>

          <p>
            人物を登録しておくことで、その人に関係する予定や記念日を時系列で確認しやすくなります。
          </p>
        </section>

        <section>
          <h3>2. 人物の基本情報を入力します</h3>

          <p>
            人物を追加するときは、名前や生年月日などの基本情報を入力します。
          </p>

          <h4>入力できる情報の例</h4>

          <TableContainer>
            <Table aria-label="人物に入力できる情報">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="col">
                    項目
                  </TableCell>
                  <TableCell component="th" scope="col">
                    内容
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    名前
                  </TableCell>
                  <TableCell>人物の名前を入力します。</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    生年月日
                  </TableCell>
                  <TableCell>
                    誕生日や年齢に関係するイベントの表示に使います。
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    色
                  </TableCell>
                  <TableCell>
                    人物を見分けやすくするための色を設定できます。
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    写真・アイコン
                  </TableCell>
                  <TableCell>
                    人物を分かりやすく表示するために設定できます。
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <p>
            生年月日を登録しておくと、年齢や節目のイベントを確認しやすくなります。
          </p>
        </section>

        <section>
          <h3>3. ライフイベントを追加します</h3>

          <p>
            人物を登録したら、その人物に関係するライフイベントを追加します。
          </p>

          <h4>ライフイベントの例</h4>

          <ul>
            <li>誕生日</li>
            <li>入学</li>
            <li>卒業</li>
            <li>就職</li>
            <li>結婚</li>
            <li>出産</li>
            <li>旅行</li>
            <li>記念日</li>
            <li>還暦などの節目</li>
          </ul>

          <p>
            Chronicaでは、これからの予定だけでなく、すでに起きた出来事も記録できます。
          </p>
        </section>

        <section>
          <h3>4. 予定・実績を選びます</h3>

          <p>
            ライフイベントは、これから起きる予定なのか、すでに起きた実績なのかを分けて管理できます。
          </p>

          <TableContainer>
            <Table aria-label="ライフイベントの種類">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="col">
                    種類
                  </TableCell>
                  <TableCell component="th" scope="col">
                    意味
                  </TableCell>
                  <TableCell component="th" scope="col">
                    例
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    予定
                  </TableCell>
                  <TableCell>これから起きる予定のイベントです。</TableCell>
                  <TableCell>入学予定、旅行予定、結婚予定</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    実績
                  </TableCell>
                  <TableCell>実際に起きた出来事です。</TableCell>
                  <TableCell>誕生日、入籍日、卒業日</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    自動生成
                  </TableCell>
                  <TableCell>
                    登録された情報をもとに表示されるイベントです。
                  </TableCell>
                  <TableCell>年齢の節目、還暦など</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <p>
            予定として登録していたイベントは、実際に起きたあとで実績として記録し直すこともできます。
          </p>
        </section>

        <section>
          <h3>5. 参加者を設定します</h3>

          <p>イベントには、関係する人物を複数設定できます。</p>

          <p>
            たとえば、結婚式であれば夫婦の2人を参加者にしたり、
            家族旅行であれば家族全員を参加者にしたりできます。
          </p>

          <h4>参加者を設定する例</h4>

          <ul>
            <li>結婚：本人と配偶者</li>
            <li>出産：子ども、父、母</li>
            <li>家族旅行：家族全員</li>
            <li>入学式：子ども、父、母</li>
          </ul>

          <p>
            参加者を設定しておくと、複数の人物に関係するイベントを整理しやすくなります。
          </p>
        </section>

        <section>
          <h3>6. 写真を追加します</h3>

          <p>
            ライフイベントには、写真を追加できます。
            記念日や旅行、入学式、誕生日などの写真を一緒に残しておくと、あとから振り返りやすくなります。
          </p>

          <h4>写真を追加する場面の例</h4>

          <ul>
            <li>誕生日の写真</li>
            <li>入学式の写真</li>
            <li>結婚式の写真</li>
            <li>旅行の写真</li>
            <li>家族の記念写真</li>
          </ul>

          <p>
            写真やイベントの情報は、ユーザーの端末またはiCloudに保存されます。
            開発者がアプリ内の写真やイベント内容を閲覧することはできません。
          </p>
        </section>

        <section>
          <h3>7. タイムラインで確認します</h3>

          <p>登録したライフイベントは、タイムラインで時系列に確認できます。</p>

          <p>
            人物ごとに関連するイベントを一覧できるため、過去の出来事だけでなく、
            これからの予定や将来の節目も確認しやすくなります。
          </p>

          <h4>タイムラインで確認できること</h4>

          <ul>
            <li>人物ごとのライフイベント</li>
            <li>過去に起きた出来事</li>
            <li>これからの予定</li>
            <li>年齢や節目に関係するイベント</li>
            <li>イベントに紐づいた写真</li>
          </ul>
        </section>

        <section>
          <h3>8. 使い方の例</h3>

          <h4>子どもの成長記録として使う</h4>

          <p>
            子どもの誕生日、入園、入学、卒業、旅行、記念写真などを登録しておくことで、
            成長の記録を時系列で振り返ることができます。
          </p>

          <h4>家族の記念日管理として使う</h4>

          <p>
            結婚記念日、誕生日、還暦、法事、家族旅行などを登録しておくことで、
            家族に関係する大切な日を整理できます。
          </p>

          <h4>将来のライフプラン整理として使う</h4>

          <p>
            入学、進学、住宅購入、旅行、退職後の予定など、
            将来のイベントを人物ごとに整理できます。
          </p>
        </section>

        <section>
          <h3>9. データの保存について</h3>

          <p>
            Chronicaに登録した人物、イベント、写真などの情報は、
            ユーザーの端末またはiCloudに保存されます。
          </p>

          <p>
            開発者がユーザーの登録内容、写真、イベント情報を閲覧することはできません。
          </p>

          <p>
            iCloudを利用している場合、同じApple
            Accountでサインインしている端末間でデータが同期されます。
            同期状況は、iCloudの設定、通信環境、端末の状態によって異なる場合があります。
          </p>

          <p>
            詳細は、
            <Link href="https://polyomino.jp/support/chronica">
              Chronicaのプライバシーポリシー
            </Link>
            をご確認ください。
          </p>
        </section>
      </section>

      <section>
        <h2>よくある質問</h2>

        <section>
          <h3>登録したデータは開発者に見えますか？</h3>

          <p>
            いいえ。登録した人物、イベント、写真などの情報を、
            開発者が閲覧することはできません。
          </p>
        </section>

        <section>
          <h3>データはどこに保存されますか？</h3>

          <p>
            Chronicaに登録したデータは、ユーザーの端末またはiCloudに保存されます。
          </p>
        </section>

        <section>
          <h3>複数の端末でデータを利用できますか？</h3>

          <p>
            同じApple AccountでiCloudを利用している端末では、
            Chronicaのデータを同期して利用できます。
          </p>

          <p>
            データが表示されない場合は、同じApple
            Accountでサインインしていることと、
            ChronicaのiCloud利用が有効になっていることをご確認ください。
          </p>
        </section>

        <section>
          <h3>機種変更後もデータを利用できますか？</h3>

          <p>
            新しい端末で同じApple
            Accountにサインインし、iCloudを有効にすることで、
            保存されているデータが同期されます。
          </p>

          <p>
            データ量や通信環境によっては、すべてのデータが表示されるまで時間がかかる場合があります。
          </p>
        </section>

        <section>
          <h3>写真へのアクセス許可はなぜ必要ですか？</h3>

          <p>
            ライフイベントに写真を追加するために使用します。
            Chronicaが、写真へのアクセスを他の目的で使用することはありません。
          </p>

          <p>写真へのアクセス許可は、iPhoneの「設定」から変更できます。</p>
        </section>

        <section>
          <h3>人物やイベントを削除したあとに元へ戻せますか？</h3>

          <p>
            削除した人物、イベント、写真などのデータは、元に戻せない場合があります。
            削除する前に、対象となるデータをご確認ください。
          </p>
        </section>

        <section>
          <h3>iCloudでデータが同期されません</h3>

          <p>次の項目をご確認ください。</p>

          <ul>
            <li>端末がインターネットに接続されていること</li>
            <li>iCloudにサインインしていること</li>
            <li>同じApple Accountを使用していること</li>
            <li>iCloudの空き容量が不足していないこと</li>
            <li>端末を再起動しても問題が続くか</li>
          </ul>

          <p>
            通信環境やiCloudの状態によっては、同期が完了するまで時間がかかる場合があります。
          </p>
        </section>

        <section>
          <h3>Chronica Premiumはどこから購入できますか？</h3>

          <p>
            Chronicaの設定画面から「Chronica
            Premium」を選択すると、購入画面を表示できます。
          </p>

          <p>
            価格と通貨は、ユーザーのApp Storeの地域設定に応じて表示されます。
            購入にはAppleのアプリ内課金システムを使用します。
          </p>
        </section>
      </section>

      <section>
        <h2>お問い合わせ</h2>

        <p>
          Chronicaに関するご質問や不具合は、以下のメールアドレスまでお問い合わせください。
        </p>

        <address>
          <a href="mailto:macbookpromacbookpromacbookpro@gmail.com">
            macbookpromacbookpromacbookpro@gmail.com
          </a>
        </address>

        <h3>不具合についてお問い合わせいただく場合</h3>

        <p>可能な範囲で、次の情報を記載してください。</p>

        <ul>
          <li>使用している端末名</li>
          <li>iOSのバージョン</li>
          <li>Chronicaのバージョン</li>
          <li>発生した問題の内容</li>
          <li>問題が発生するまでの操作手順</li>
          <li>画面にエラーメッセージが表示された場合は、その内容</li>
        </ul>

        <p>
          人物名、写真、イベントの内容などの個人情報は、
          問題の調査に必要な場合を除き、メールに記載しないでください。
        </p>
      </section>
    </ContentsCard>
  );
};

export default ChronicaUsage;
