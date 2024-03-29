# 開発手法

## テスト駆動開発

### 進め方

1. 目標をTODOリストに書き出す
2. TODOリストから1つピックアップしてテストを書く
3. テストを実行してRed(テスト失敗)を出す
4. 実装コード(仮実装)を書く
    - テストケースを満たす値をそのまま返すようなものでok
5. テストを実行してGreen(テスト成功)を出す
6. Greenを保ったままリファクタリングを行う
    - コードの重複を除去する 等

### TDDに求めるもの（想定)

- テストを書く事から始める事で
    - プロダクトコードを書いて完成と思っても抜けや漏れを見落とさずにすみそう
    - 書いた後デバッグするのに無限に時間をかけられるので、その時間を減らせそう
    - 自分のコードに自信を持ってコミットできそう
- 関数やコンポーネントをテストしやすい粒度に分解してコードを書けるようになりそう
    - それによって修正時にデグレが起こりにくい

### TDDの感想

- 序盤は意識してできた
    - ブラウザ立ち上げてlogで確認という作業をせずにすんだ
    - 気持ちよく開発できた
- 個々の関数や単純なコンポーネントのテストは書きやすかった
- 終盤は時間的なリソース不足の為テストを書けなかった
- fetch処理を含む関数とコンポーネントを組み合わせたテストが難しかった
    - どこに書けばいいかわからなかった
    - どう書けばいいかわからなかった
- hooksのテストが難しかった

> プロダクトコードを書いて完成と思っても抜けや漏れを見落とさずにすみそう
> 
- 仕様が抜け漏れなければそうなりそう
    - コードを書き始める前に仕様をまとめられたのは良かった
- 終盤テストの網羅性が低くなってしまった為完全に把握できなかった

> 関数やコンポーネントをテストしやすい粒度に分解してコードを書けるようになりそう
> 
- これはその通りだと思った

> それによって修正時にデグレが起こりにくい
> 
- これに関しては終盤テストの網羅性が低くなってしまった為デグレが生じた


## Github Flow

個人開発でありながら、基本的に GitHub Fow に則り開発を進めました。  
- mainブランチ
  - mainブランチにmergeされたら自動で本番用リリースする
  - developブランチからしかmergeしない
- developブランチ
  - developブランチからトピックブランチを切り、開発したらdevelopブランチにmergeする
  - developブランチにmergeされたら自動でpreview用の環境に反映される
- トピックブランチ
  - 特定の開発を行う