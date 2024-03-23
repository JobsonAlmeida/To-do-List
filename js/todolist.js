;(function(){
    "use strict"


    //ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")


    function addEventLi(li){

        li.addEventListener("click",  function(e){
            console.log(this)

        })

    }

    function addTask(task){
        const li = document.createElement("li")        
        li.className = "todo-item"

        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent= task

        li.appendChild(p)

        ul.appendChild(li)

        addEventLi(li)

      

    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault()

        console.log(itemInput.value)
        // ul.innerHTML += `
        //     <li class="todo-item">        
        //         <p class="task-name">${itemInput.value}</p>
        //     </li>
        // `

        addTask(itemInput.value)

        itemInput.value = ""

        itemInput.focus(itemInput.valu)

    });

    [...lis].forEach(li => {
        addEventLi(li)
    });

})()