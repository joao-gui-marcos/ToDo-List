let ol = document.getElementById('lista-tarefas')
let addButton = document.getElementById('criar-tarefa')
let clearButton = document.getElementById('apaga-tudo')
let clearCompletedButton = document.getElementById('remover-finalizados')
let saveButton = document.getElementById('salvar-tarefas')

addButton.addEventListener('click',addTask)

function addTask() {
    let task = document.getElementById('texto-tarefa').value
    let newItem = document.createElement('li')
    newItem.innerText = task
    ol.appendChild(newItem)
    document.getElementById('texto-tarefa').value = ''
    updateList()
}

function updateList() {
    let listItens = document.getElementsByTagName('li')
    for (let i = 0; i < listItens.length; i += 1) {
        listItens[i].addEventListener('click',colorizeTask)
        listItens[i].addEventListener('dblclick',completeTask)
    }
}

function colorizeTask(event) {
    uncolorTask()
    event.target.style.backgroundColor = 'grey'
}

function uncolorTask() {
    let listItens = document.getElementsByTagName('li')
    for (let i = 0; i < listItens.length; i += 1) {
        if (listItens[i].style.backgroundColor == 'grey') {
            listItens[i].style.backgroundColor = 'unset'
        }
    }
}

function completeTask(event) {
    if (event.target.classList != 'completed') {
        event.target.classList = 'completed'
    } else {
        event.target.classList.remove('completed')
    } 
}

clearButton.addEventListener('click',clearList)

function clearList() {
    while (ol.firstChild) {
        ol.removeChild(ol.lastChild);
      }
}

clearCompletedButton.addEventListener('click',clearCompleted)

function clearCompleted() {
    let completedItens = document.getElementsByClassName('completed')
    while (completedItens[0]) {
        completedItens[0].parentNode.removeChild(completedItens[0]);
    }
}

saveButton.addEventListener('click',saveList)

function saveList() {
    let listItens = document.getElementsByTagName('li')
    let count = 0
    localStorage.clear()
    for (let i = 0; i < listItens.length; i += 1) {
        console.log(listItens[i].innerText)
        if (listItens[i].classList == 'completed') {
            localStorage.setItem(JSON.stringify(i+1),listItens[i].innerText + '_completed_')
        } else {
            localStorage.setItem(JSON.stringify(i+1),listItens[i].innerText)
        }
        count += 1
    }
    localStorage.setItem('savedItens',JSON.stringify(count))
}

function setList() {
    let savedItens = JSON.parse(localStorage.getItem('savedItens'))
    for (let i = 1; i <= savedItens; i += 1) {
        let item = document.createElement('li')
        item.innerText = localStorage.getItem(JSON.stringify(i)).replace('_completed_','')
        if(localStorage.getItem(JSON.stringify(i)).indexOf("_completed_") !== -1){
            item.classList = 'completed'
        }
        ol.appendChild(item)
    }
}

let moveToTop = document.getElementById('mover-cima')
moveToTop.addEventListener('click',moveItemToTop)
let moveToBottom = document.getElementById('mover-baixo')
moveToBottom.addEventListener('click',moveItemToBottom)

function moveItemToTop() {
    let listItens = document.getElementsByTagName('li')
    for (let i = 0; i < listItens.length; i += 1) {
        if (listItens[i].style.backgroundColor == 'grey') {
            if (listItens[i] != ol.firstChild) {
                listItens[i].replaceWith(listItens[i],listItens[i].previousSibling)
            }
            break
        }
    }
}

function moveItemToBottom() {
    let listItens = document.getElementsByTagName('li')
    for (let i = 0; i < listItens.length; i += 1) {
        if (listItens[i].style.backgroundColor == 'grey') {
            if (listItens[i].style.backgroundColor == 'grey') {
                if (listItens[i] != ol.lastChild) {
                    listItens[i].replaceWith(listItens[i].nextSibling,listItens[i])
                }
                break
            }
        }
    }
}


let clearSelectedButton = document.getElementById('remover-selecionado')
clearSelectedButton.addEventListener('click',clearSelected)

function clearSelected() {
    let listItens = document.getElementsByTagName('li')
    for (let i = 0; i < listItens.length; i += 1) {
        if (listItens[i].style.backgroundColor == 'grey') {
            listItens[i].remove()
        }
    }
}

window.onload = function() {
    setList()
    updateList()
  };
