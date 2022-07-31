# 都道府県別の総人口推移グラフ

## 概要

47都道府県分の中から選択した都道府県別の1970年から2020年まで10年ごとの人口数の推移を線グラフで表示します。

## [コードの詳細](./documents/description.md)

## [開発手法](./documents/development-method.md)

## 主な使用技術とバージョン

- node: 16.15.X
- typescript: 4.6.X
- react: 18.0.X
- react-dom: 18.0.X
- vite: 2.9.X
- react-query: 3.39.X
- axios: 0.27.X
- styled-components: 5.3.X
- chart.js: 3.7.X
- react-chartjs-2: 4.1.X
- jest: 28.1.X
- testing-library/react: 13.2.X
- storybook/react: 6.4.X


## インストール方法

リポジトリをクローンしてください  
`$ git clone https://github.com/diskszk/population-transition-graph-by-prefectures.git`  

作業ディレクトリに移動してください  
`$ cd population-transition-graph-by-prefectures`

ライブラリをインストールしてください  
`$ yarn install`

以下のURLからRESAS APIの利用登録(無料)を行い、API Keyを発行してください  
https://opendata.resas-portal.go.jp/

ローカル環境に.envファイルを作成し下記コードを貼り付け、RESAS APIで発行したAPI Keyを入力してください  
`$ touch .env`  

```
VITE_API_KEY=
```

テストが通る事を確認してください  
`$ yarn test`

デベロップサーバーを起動してください  
`$ yarn dev`

## その他のドキュメント

[データフロー図](./documents/data-flow/data-flow.md)

[E2Eテストシナリオ](./documents/test-scenario.md)