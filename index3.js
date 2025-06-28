// 1. 定数やDOM取得
    let todos =["todo1", "todo2"];

// 2. 関数定義（ロジック部分）
    // 値を入力したら実行する関数（値→定数→未完了作成関数（引数は入力した値が入っている定数））
        const onClickAdd = () => {
            // テキストボックスの値を取得し、初期化する
                const inputText = document.getElementById("add-text").value;
                document.getElementById("add-text").value ="";

                if (inputText === "")return;
                const todos = [...todos, inputText];
            // 未完了リストを作る関数を実行（引数は入力した値の変数）
        const renderTodos = () => {
            console.log(todos)
        }};

renderTodos();


// 3. イベント登録（イベントまとめゾーン）
    // ボタンがクリックされたら、onClickAddという関数を実行
        document.getElementById("add-button").addEventListener("click",onClickAdd);