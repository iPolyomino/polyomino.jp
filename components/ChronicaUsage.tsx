import ContentsCard from "@/components/ContentsCard";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const ChronicaUsage = () => {
  return (
    <ContentsCard>
      <section>
        <h2>1. まずは人物を登録します</h2>

        <p>
          Chronica では、カレンダーの予定だけを管理するのではなく、
          「誰に関係する出来事か」を中心にライフイベントを整理します。
        </p>

        <p>
          はじめに、自分、配偶者、子ども、親、親族など、管理したい人物を登録してください。
        </p>

        <h3>登録する人物の例</h3>
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

      <hr />

      <section>
        <h2>2. 人物の基本情報を入力します</h2>

        <p>人物を追加するときは、名前や生年月日などの基本情報を入力します。</p>

        <h3>入力できる情報の例</h3>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>項目</TableCell>
                <TableCell>内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>名前</TableCell>
                <TableCell>人物の名前を入力します。</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>生年月日</TableCell>
                <TableCell>
                  誕生日や年齢に関係するイベントの表示に使います。
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>色</TableCell>
                <TableCell>
                  人物を見分けやすくするための色を設定できます。
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>写真・アイコン</TableCell>
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

      <hr />

      <section>
        <h2>3. ライフイベントを追加します</h2>

        <p>人物を登録したら、その人物に関係するライフイベントを追加します。</p>

        <h3>ライフイベントの例</h3>
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
          Chronica
          では、これからの予定だけでなく、すでに起きた出来事も記録できます。
        </p>
      </section>

      <hr />

      <section>
        <h2>4. 予定・実績を選びます</h2>

        <p>
          ライフイベントは、これから起きる予定なのか、すでに起きた実績なのかを分けて管理できます。
        </p>

        <Table>
          <TableHead>
            <TableRow>
              <th>種類</th>
              <th>意味</th>
              <th>例</th>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>予定</TableCell>
              <TableCell>これから起きる予定のイベントです。</TableCell>
              <TableCell>入学予定、旅行予定、結婚予定</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>実績</TableCell>
              <TableCell>実際に起きた出来事です。</TableCell>
              <TableCell>誕生日、入籍日、卒業日</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>自動生成</TableCell>
              <TableCell>
                登録された情報をもとに表示されるイベントです。
              </TableCell>
              <TableCell>年齢の節目、還暦など</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          予定として登録していたイベントは、実際に起きたあとで実績として記録し直すこともできます。
        </p>
      </section>

      <hr />

      <section>
        <h2>5. 参加者を設定します</h2>

        <p>イベントには、関係する人物を複数設定できます。</p>

        <p>
          たとえば、結婚式であれば夫婦の2人を参加者にしたり、
          家族旅行であれば家族全員を参加者にしたりできます。
        </p>

        <h3>参加者を設定する例</h3>
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

      <hr />

      <section>
        <h2>6. 写真を追加します</h2>

        <p>
          ライフイベントには、写真を追加できます。
          記念日や旅行、入学式、誕生日などの写真を一緒に残しておくと、あとから振り返りやすくなります。
        </p>

        <h3>写真を追加する場面の例</h3>
        <ul>
          <li>誕生日の写真</li>
          <li>入学式の写真</li>
          <li>結婚式の写真</li>
          <li>旅行の写真</li>
          <li>家族の記念写真</li>
        </ul>

        <p>
          写真やイベントの情報は、ユーザーの端末または iCloud に保存されます。
          開発者がアプリ内の写真やイベント内容を閲覧することはできません。
        </p>
      </section>

      <hr />

      <section>
        <h2>7. タイムラインで確認します</h2>

        <p>登録したライフイベントは、タイムラインで時系列に確認できます。</p>

        <p>
          人物ごとに関連するイベントを一覧できるため、
          過去の出来事だけでなく、これからの予定や将来の節目も確認しやすくなります。
        </p>

        <h3>タイムラインで確認できること</h3>
        <ul>
          <li>人物ごとのライフイベント</li>
          <li>過去に起きた出来事</li>
          <li>これからの予定</li>
          <li>年齢や節目に関係するイベント</li>
          <li>イベントに紐づいた写真</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>8. 使い方の例</h2>

        <h3>子どもの成長記録として使う</h3>
        <p>
          子どもの誕生日、入園、入学、卒業、旅行、記念写真などを登録しておくことで、
          成長の記録を時系列で振り返ることができます。
        </p>

        <h3>家族の記念日管理として使う</h3>
        <p>
          結婚記念日、誕生日、還暦、法事、家族旅行などを登録しておくことで、
          家族に関係する大切な日を整理できます。
        </p>

        <h3>将来のライフプラン整理として使う</h3>
        <p>
          入学、進学、住宅購入、旅行、退職後の予定など、
          将来のイベントを人物ごとに整理できます。
        </p>
      </section>

      <hr />

      <section>
        <h2>9. データの保存について</h2>

        <p>
          Chronica に登録した人物、イベント、写真などの情報は、
          ユーザーの端末または iCloud に保存されます。
        </p>

        <p>
          開発者がユーザーの登録内容、写真、イベント情報を閲覧することはできません。
        </p>

        <p>
          iCloud を利用している場合、同じ Apple ID
          でサインインしている端末間でデータが同期されることがあります。
          同期の状態は、iCloud の設定、通信環境、端末の状態により異なります。
        </p>
      </section>
    </ContentsCard>
  );
};

export default ChronicaUsage;
