window.addEventListener("load", function () {
    const todoListData = [],
        todo = document.querySelector("input");
        btn = document.querySelector(".btn");
        todoList = document.querySelector(".todo-list");
        alert = document.querySelector(".result");
        alertText = document.querySelector(".result h3");
        

        btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (todo.value.trim().length === 0) {
              alertEmptyTodo();
              alertText.textContent = "Insert your tasks";
            } else {
              todoListData.push(todo.value);
              todoListData.forEach((item) => {
                const todoItem = document.createElement("div");
                todoItem.setAttribute("class", "task");
                todoList.appendChild(todoItem);
                todoItem.textContent = item;
                todoListData.shift();
                todo.value = "";
                todoItem.addEventListener("click", () => {
                  todoItem.remove();
                });
              });
            }
          });




})
 
    



