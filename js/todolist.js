;(function(){
    "use strict"


    //ARMAZENAR O DOM EM VARIAVEIS
    const itemInput = document.getElementById("item-input")
    const todoAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    // const lis = ul.getElementsByTagName("li")

    let arrTasks = [
        {
            name: "task 1",
            createdAt: Date.now(),
            completed: false

        }
    ]

    function addEventLi(li){

        li.addEventListener("click",  function(e){
            console.log(this)

        })

    }

    function generateLiTask(obj){

        const li = document.createElement("li")      
        const p = document.createElement("p") 
        const  checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deletebutton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = "<i class=\"fas fa-check displayNone\"></i>"

        li.appendChild(checkButton)
        
        p.className = "task-name"
        p.textContent= obj.name

        li.appendChild(p)

        editButton.className = "fas fa-edit" 
        li.appendChild(editButton)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        containerEdit.appendChild(inputEdit)
        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEdit.appendChild(containerEditButton)
        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerEdit.appendChild(containerCancelButton)
        li.appendChild(containerEdit)




        deletebutton.className = "fas fa-trash-alt"
        li.appendChild(deletebutton)



        addEventLi(li)

        return li
   
    }

    function renderTasks(){

        ul.innerHTML = ""

        arrTasks.forEach(taskObj => {
            ul.appendChild(generateLiTask(taskObj))
        });
    }


    function addTask(task){

        arrTasks.push({
            name: task,
            createdAt: Date.now(),
            completed: false

        })
      
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

        renderTasks()

        itemInput.value = ""

        itemInput.focus(itemInput)

    });

    
    renderTasks()

})()