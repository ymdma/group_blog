  # Group Blog

  ## GroupBlogとは
    "Group Blog"はグループ機能を持った、シンプルなブログサイトです。

    グループを作成すると、グループ内のメンバーと投稿を共有することができます。

  <br>

  ## 制作背景

  ### 制作動機
    テックエキスパートのカリキュラムを終えた後、個人でアプリを制作するにあたり、
    それまでの学びを踏まえCRUD機能を持ったシンプルなアプリを制作したいと考えました。
    その際、CRUD機能を持った"Webアプリケーション"として、「求められる」、「ニーズのある」ものを作るには、
    できるだけページ遷移と読み込み直しを少なくする必要があると考えました。
    そのような考えから、ブログの投稿やグループの作成をインデックスで行えるようにしたいと考えました。

  ### 反省点
    しかし、それをするために、コントローラーやビューの記述量が増え、
    特にコントローラーでは記述が複雑になり、長く・複雑で・見にくいコードになってしまいました。
    （また、イレギュラーなやり方を探したり、基礎の理解が足りないことで技術の応用に苦労し、実装に時間がかかりました。）

    （それらは全て、私の技術力不足と見込みの甘さが引き起こした問題ではあるのですが）
  ### 今後の展望
    それらの問題点の根本的な解決をするためには、必要な部分の要素を切り替えて表示することのできる、
    コンポーネント指向の言語を用いてフロントを実装する、というのが正解なのではないかと考えました。

    そのため、次のステップとして、SPAアプリケーションの開発ができることを目標に、Vue.jsを用いた開発を勉強したいと考えています。

<br>

  #  各機能の紹介

  <br>

  ## ユーザー機能

      ユーザーを登録し、ログイン・ログアウトすることができます。
  <br>
  <br>

  ## グループ機能<br>
      ユーザーは、グループを作成し、自分の所属するグループに対してブログを投稿することができます。


  - グループの表示
    - サインイン後、インデックスに表示される ”グループの投稿を表示”エリア内のボタンをクリックすることで、グループに投稿されたブログを一覧で表示する事ができます。


  - グループの作成<br>
    - ユーザーは新規でグループを作成することができます。<br>


  [![Image from Gyazo](https://i.gyazo.com/bd614d6f0a2bf2ba6b7e95c915a2778f.gif)](https://i.gyazo.com/bd614d6f0a2bf2ba6b7e95c915a2778f.gif)


  <br>

  - グループの削除<br>

[![Image from Gyazo](https://i.gyazo.com/4325be35bd39a6dd281fbb480817251d.gif)](https://gyazo.com/4325be35bd39a6dd281fbb480817251d)

 
  <br>

  ## ブログの投稿機能<br>
      各ナビゲーション部をクリックすることにより、ブログ投稿フォームを表示することができます。

  <br>

  ### ブログの一覧表示<br>
  - グループ表示ボタンを押して選択したグループの投稿一覧を表示します。
    自分の全ての投稿と、自分の所属する各グループの投稿が選べます。


  ### ブログの詳細表示<br>
  - 一覧表示されたブログをクリックすることでブログの詳細ページにアクセスすることができます。

[![Image from Gyazo](https://i.gyazo.com/7946e564e150e35f9dcf6d206ce30221.gif)](https://gyazo.com/7946e564e150e35f9dcf6d206ce30221)


  ### ブログの編集<br>
  - 詳細ページ内、[編集する]ボタンをクリックすることで編集ページにアクセスします。
    編集ページでは、ブログのタイトル、本文テキストを変更することができます。

[![Image from Gyazo](https://i.gyazo.com/bac1e928e59de910f1f3c1df2a0bbdc6.gif)](https://gyazo.com/bac1e928e59de910f1f3c1df2a0bbdc6)


  ### ブログの削除<br>
  - 詳細ページ内、[削除する]ボタンをクリックすると確認のモーダルウィンドウが開きます。
    問題がなければ、[削除する]ボタンをクリックすることでブログを削除できます。



  <br>

  ## ナビゲーション<br>
[![Image from Gyazo](https://i.gyazo.com/36116b1b3f3616dbb1f95e6eae19e7de.png)](https://gyazo.com/36116b1b3f3616dbb1f95e6eae19e7de)

<br>

      メインページ内にナビゲーションは2箇所にあります。
      画面上部、ヘッダー内右側にあるテキスト、または画面中央右側のタブより、投稿フォームの表示、グループ機能の表示が行えます。（共にログイン後のみ）

      また、ヘッダーナビゲーション上にて、ログイン状態の確認（ユーザー名の表示）及び、ログアウトができます。

  <br>
  <br>

  # 利用手順

  <br>

    - ログイン手順<br>
      - http://52.193.98.166/ にアクセスします。
      - 画面中央右側のタブより、ログイン、またはサインアップを行います。

  <br>

    - グループ作成手順<br>
      - 各ナビゲーションよりフォームを表示させます。
      - グループ名を入力します。
      - グループに追加するメンバーを選択します。
        - ユーザーの選択肢がボタンとして表示されているので、クリックして選択します。
        - ユーザーの選択肢がボタンとして表示されているので、クリックします。
    - ブログ投稿手順
      - 投稿先のグループの選択
        - 所属するグループがボタンとして表示されているので、クリックして選択します。
      - タイトル、本文テキスト、アップロードしたい画像があればファイルを指定します。
        - （画像のアップロードにはcarrier waveを使用し、画像データはS3サーバーに保存しています。）
  <br>
  <br>
  <br>

                -- 今後追加予定の機能 --
                ・グループの管理者カラムを追加
                ・ ユーザー名の変更
                ・ グループメンバーの追加と削除
                ・ 投稿の変更機能
                ・ ブログに対するコメント機能