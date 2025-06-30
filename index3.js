// 1. 定数やDOM取得
    let inputText = "";
    let incompleteTodostodos =[];
    let completeTodostodos =[];

// 2. 関数定義（ロジック部分）
    // 値を入力したら実行する関数（値→定数→未完了作成関数（引数は入力した値が入っている定数））
        const onClickAdd = () => {
            // テキストボックスの値を取得し、初期化する
                inputText = document.getElementById("add-text").value;
                document.getElementById("add-text").value ="";

                if (inputText === "")return;
                incompleteTodostodos = [...incompleteTodostodos, inputText];
            // 未完了リストを作る関数を実行（引数は入力した値の変数）
                renderTodos(todos);
        };

        const renderTodos = (todo) => {
            // li生成
                const li = document.createElement("li");
            // div生成
                const div = document.createElement("div");
                div.className = "list-row";
            // p生成
                const p = document.createElement("p");
                p.className = "todo-item";
                p.innerText = todo;
            // button（完了）タグ生成
                const completeButton = document.createElement("button");
                completeButton.innerText ="完了";
            // button（削除）タグ生成
                const deleteButton = document.createElement("button");
                deleteButton.innerText ="削除";
            // liタグの子要素に各要素を設定
                div.appendChild(p);
                div.appendChild(completeButton);
                div.appendChild(deleteButton);
                li.appendChild(div);
                console.log(li);
            // 未完了リストに追加
                document.getElementById("incomplete-list").appendChild(li);
        };

// 3. イベント登録（イベントまとめゾーン）
    // ボタンがクリックされたら、onClickAddという関数を実行
        document.getElementById("add-button").addEventListener("click",onClickAdd);