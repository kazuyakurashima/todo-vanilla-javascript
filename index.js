// 映像学習そのもののコード。

// 入力した値を変数に入れる関数を定義
const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value ="";

    // 未完了リストを作る関数を実行（引数は入力した値の変数）
    createIncompleteTodo(inputText);
}


// 渡された引数を元に未完了のTODOを作成する関数の定義
const createIncompleteTodo = (todo) => {

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
    completeButton.addEventListener("click", () => {
            // 押された完了ボタンの親にあるliタグは以下の完了ボタンと削除ボタンを削除
            const moveTarget = completeButton.closest("li");
            completeButton.nextElementSibling.remove();
            completeButton.remove();
            // 戻すボタンを生成してdivタグ配下に設定
            const backButton = document.createElement("button");
            backButton.innerText = "戻す";
            backButton.addEventListener("click", () => {
                // TODOの内容を取得し、未完了リストに追加
                const todoText = backButton.previousElementSibling.innerText;
                createIncompleteTodo(todoText);
                // 押された戻すボタンの親にあるliタグを削除
                backButton.closest("li").remove();
            });
            moveTarget.firstElementChild.appendChild(backButton);
            // 完了リストに移動
            document.getElementById("complete-list").appendChild(moveTarget);
        });

    // button（削除）タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText ="削除";
    deleteButton.addEventListener("click", () => {
            // 押された削除ボタンの親にあるliタグを未完了リストから削除
            const deleteTarget = deleteButton.closest("li");
            document.getElementById("incomplete-list").removeChild(deleteTarget);
        });

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    console.log(li);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);

};

// ボタンがクリックされたら、onClickAddという関数を実行
document.getElementById("add-button").addEventListener("click",onClickAdd);
