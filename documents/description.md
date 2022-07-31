# コードの詳細

## 構成

### ディレクトリ構成

末端のディレクトリ名はそのディレクトリ内で実際に使用されるコンポーネントまたは関数ファイル名と同名となっており、  
それぞれ以下のようになっている。
  - XXX.ts(x)
    - 実際に使用されるコンポーネントまたは関数ファイル名
  - XXX.spec.ts(x)
    - テストファイル
  - (stories.tsx)
    - storybooksのコードを書くファイル
    - コンポーネントファイルと同ディレクトリにのみ存在する
  - (useXXX.ts)
    - 同ディレクトリ内のコンポーネントでのみ使用されるcustom hooks
  - index.ts
    - 実際に使用されるコンポーネントまたは関数ファイルを外部へexportする

### コンポーネントの役割

- src/App.tsx
アプリケーション内の共通の設定やプロバイダーを記載。

#### Page / Partial / Component

- src/components
最小単位のコンポーネント。
状態を持たない(親から注入されるのみ)コンポーネント。Atomic Design の atom 相当する。

- src/partial
状態を持つ、ページでないコンポーネント。  
global stateにアクセスして状態を取得することができる。

- src/pages
URLに対して1つ存在し、ページごとのコンポーネントをまとめるコンポーネント。  
ページ内で必要なglobal state等のプロバイダーを記載。

## 使用技術と選定理由

### 開発

- React
  - コンポーネントごとに分けて開発できる
  - TypeScriptとの相性が良い
  - JavaScript(TypeScript)の記法で書ける

- TypeScript
  - 静的型付けによって型エラーによるバグを減らせる
  - コンパイルでエラーを検知できる
  - エディターの補完によって開発効率が上がる

- styled-components
  - コンポーネント単位でstyleを記述できる

- axios, React Query
  - useEffect内でfetch処理を呼び出さないことでバグや不要な再レンダリングを避けられる

### リンター, フォーマッター

- ESLint
- Prettier

### グラフライブラリ

- react-chartjs-2, chart.js
  - Reactとの相性が良い

### 状態管理

- useContext, useReducer

### ビルドツール

- vite
  - react-scriptsやwebpackより開発サーバーの立ち上がりが速い
  - `yarn create vite` コマンドで簡単に開発環境を作れる

### テスト

- jest, react-testing-library
  - Reactコンポーネントのテストを書くことができる

### コンポーネント開発・管理

- storybook
  - storybooksサーバーを立ち上げることで簡単にコンポーネントの見た目を確認でき、開発スピードが上がる

### CI/CD

- CircleCI, Vercel
    - CircleCIを用いて、GitHubにpushしたコードにlintとtestを施し、両方通っていればmerge可能であるとした
    - CircleCIの無料枠の上限を超えないためにbuildは行わなかった
    - Vercelはmainブランチ及びdevelopブランチに変更があった時のみ自動でデプロイするように設定した

### デプロイ

- Vercel
    - vite環境でも利用可能で、数回クリックでデプロイできる
