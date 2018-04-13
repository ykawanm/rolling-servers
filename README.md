# Cocktail Demo

### ビルド&デプロイ
メインメニューの「サービス」を選択し「ビルド管理」をクリックします。「ビルド管理」画面で右上の「ビルド作成」をクリックします。下記のGithubのソースコードを使用してビルドを実行します。
- リポジトリURL: https://github.com/sanghee911/rolling-servers.git
- 以下のDockerfileを使用します。
```dockerfile
FROM node:carbon
WORKDIR /usr/src/app
COPY repo/src/package*.json ./
RUN npm install
COPY repo/src .
ENV COLOR azure
EXPOSE 8000
CMD [ "node", "server" ]
```
- インスタンス数は1つに設定します。
- 


スケールアップをして