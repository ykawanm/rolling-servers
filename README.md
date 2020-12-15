# Cocktail Demo
## ログイン
## 言語変更
## マニュアル
## サービス
## アプリケーションマップ
## ビルド
1. 左ペインより、「ビルド」をクリックします。「ビルド管理」画面で右上の「ビルド作成」をクリックします。
2. 基本情報(ビルド名、説明、レジストリ名、イメージ名、バージョン)を入力します。
3. ビルドの際に行う処理を「ビルドタスク」を追加ボタンで追加します。
4. Githubからソースをダウンロードする場合は、タイプを「コードレポジトリ作業」で作成します。
5. ジョブ名、レポジトリURL、ブランチ、コードの保存パスを入力し、作成します。
- レポジトリURL: https://github.com/ykawanm/rolling-servers.git
- ブランチ： master
- コードの保存パス : repo
6. 「ビルドタスク」を追加ボタンで「イメージビルド作業」を追加します。
7. 以下のDockerfileを入力し、作成します。
```dockerfile

FROM node:carbon-slim
WORKDIR /usr/src/app
COPY repo/src/package*.json ./
RUN npm install
COPY repo/src .
ENV COLOR azure
EXPOSE 8000
CMD [ "node", "server" ]
```
8. 設定したビルドを保存する場合は、右上の「作成」ボタンを、ビルドを保存と共にコンテナイメージを作成する場合は、「作成/実行」をクリックします。
※ビルド実行は今回ビルドする際の「説明」を入力します。
## デプロイ
1. 左ペインより、「サービス」をクリックします。
2. デプロイを行いたい「サービス」をクリックします。
3. 「ワークロードのステータス」画面で、グループのタイトルの右にある「＋」ボタンをクリックし、ワークロードを作成します。
4. タイプを"Multi Instance"を選択し、作成ボタンをクリックする。
5. 基本情報(名前、説明)を入力します。
6. コンテナ欄の追加ボタンをクリックします。
7. デプロイするコンテナの情報を入力します。ここでは、コンテナ名、イメージ形式、ビルド/イメージ/タグ(イメージ形式を"ビルドから選択"で表示される)を入力します。
- イメージ形式： ビルドから選択
- ビルド : デプロイするビルドを選択
- タグ : デプロイするコンテナイメージのバージョンを選択
8. 「配布ポリシー」項目の「インスタンス」欄の編集ボタンをクリック
9. コピー数を"2"に変更 (Pod が2つで起動)します。
10. 右上の「作成」ボタンをクリックします。
## サービスの外部公開
1. ワークロードの詳細画面(サービス->ワークロードクリック)を表示します。
2. 上部の「サービス」をクリックします。
3. 「サービス」欄の追加ボタンをクリックします。
4. サービスタイプ、サービス名、タイプワークロードを入力します。
- サービスタイプ : Node Port
- タイプワークロード : 対象のワークロードを選択、ポート追加ボタンをクリック
- 名前 : ポート名
- プロトコル : TCP
- ターゲットポート : 8000
- サービスポート : 8000
- ノードポート : 入力しない (30000-32767で任意のものが選ばれる)

## Tomcat-spring
https://github.com/acornapps/tomcat-springmvc.git  
- イメージ :   
  adoptopenjdk/maven-openjdk11:latest
```
FROM tomcat:latest
COPY app/target/ROOT.war /usr/local/tomcat/webapps/
EXPOSE 8080
```
