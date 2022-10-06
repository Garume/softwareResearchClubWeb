# softwareResearchClubWeb

TDUソフトウェア研究部の新ウェブサイトです。
旧サイト http://www.sg.dendai.ac.jp/s1g-src/ (そのうち新サイトに置き換わります)

## Develop
### node.js 必須

```
yarn
```
でインストールされます

```
yarn dev
```

localhost:3000に立ち上がります。

(予定)
`main`にコミットすれば自動的にビルドされます。
`production`に排出されます

## Local

ローカルのみで検証する場合

```
yarn
```
でインストールされます


```
yarn serve
```
で静的ファイル(index.html)が/outに出力され、localhost:3000に立ち上がります。
/out以下をコピペすればいけるはず！

## 使用技術
Next.js Mantine TailwindCss  


