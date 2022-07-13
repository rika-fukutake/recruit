# ガイドライン
## コミットメッセージ
- [Angular Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

## CSS / Sass
- [FLOCSS](https://github.com/hiloki/flocss)
- [Airbnb CSS / Sass Style Guide](https://github.com/airbnb/css)

## JavaScript
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb JavaScript Style Guide 日本語訳](https://mitsuruog.github.io/javascript-style-guide/)

## ソースコードの自動整形
VS Codeの拡張機能である「ESLint」「Stylelint」「Prettier」「EditorConfig」を使用することによってコードの整形を自動で行ってくれます。  
拡張機能の動作が重い場合は、 `.vscode > settings.json` から設定を変更します。  

e.g. 保存時に Stylelint の自動整形をオフにする場合
  
```diff
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
-  "source.fixAll.stylelint": true
+  "source.fixAll.stylelint": false
},
```
