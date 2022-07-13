# RTP プロジェクトの始め方

## プロジェクトリポジトリの準備
[クリエイティブファクトリーのGitHub](https://github.com/orgs/mynavi-creative-factory/repositories) で新規リポジトリを作成 (緑色の「New repository」から)  
- Repository template: `mynavi-creative-factory/webpack-boilerplate`
  - Include all branches: チェックなし
- Owner: `mynavi-creative-factory`
- Repository name: `cf-rs-theme-<ID>` (※)
- Description: 空欄でOK
- Public or Private: `Private`

※ `<ID>` は、[スプレッドシート](https://docs.google.com/spreadsheets/d/1YVXl9mdjksUWNjT81lTLETvcIb17dSp5ZbEls9LuRSQ/edit#gid=53129079)を参照してください。  
e.g. IDが1の場合は、 `cf-rs-theme-1` となる。

## 開発の準備
リポジトリをローカルにクローンします。  

Using `HTTPS` :  
```
git clone https://github.com/mynavi-creative-factory/cf-rs-theme-<ID>.git
```

Using `SSH` :  
```
git clone git@github.com:mynavi-creative-factory/cf-rs-theme-<ID>.git
```

※ `<ID>` はプロジェクトに合わせて変更してください。

## 開発の始め方
Node.js のバージョンは、 package.json 内の `engines.node` を参照してください。

パッケージのインストール  
```
npm ci
```

`localhost:8080` で開発サーバーが立ち上がります。  
```
npm run start
```

### リリース準備
ソースコードが圧縮されたリリース用のファイルを dist 配下に生成します。  
```
npm run prod
```

※ ソースコードを圧縮したくない場合は、開発用のコマンドを実行してください。  
```
npm run dev
```
