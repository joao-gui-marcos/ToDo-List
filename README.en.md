# Welcome to the Task List project repository!

## 👨‍💻 What was developed:

-   A to-do list using`HTML`,`CSS`e`JavaScript`.

:bulb:**See a sample below**

![exemplo de uma todo list](./sample.gif)

# Mandatory Requirements

## 1 - Add to your list the title "My Task List" in a tag`<header>`

<details><summary><strong>Adicione uma tag <code>header</code> com o conteúdo "Minha Lista de Tarefas"</strong></summary><br />

-   Your page must have a tag`header`with the content "My Task List"

</details>

## 2 - Add below the title a paragraph with the text "Double-click an item to mark it as complete"

<details><summary><strong>Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"</strong></summary><br />

**What will be checked:**

-   There is an element with the id`funcionamento`;
-   Your content is`Clique duas vezes em um item para marcá-lo como completo`.

</details>

## 3 - Add an input where the user can type the name of the item they want to add to the list

<details><summary><strong>Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista</strong></summary><br />

**What will be checked:**

-   There is an element of type`input`;
-   your id is`texto-tarefa`.

</details>

## 4 - Add an ordered list of tasks

<details><summary><strong>Adicione uma lista ordenada de tarefas com o id="lista-tarefas"</strong></summary><br />

**What will be checked:**

-   There is an element of type`ol`;
-   your id is`lista-tarefas`.

</details>

## 5 - Add a button and, by clicking this button, a new item should be created at the end of the list and the input text should be cleared

<details><summary><strong>Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo</strong></summary><br />

**What will be checked:**

-   There is an element of type`button`;
-   your id is`criar-tarefa`;
-   when typing text`minha primeira tarefa`and click the button`criar-tarefa`, the text entered appears in the list and**disappears from input field**;
-   Adding elements to the list will be done a few times, and it will be checked that all created items remain in the list as new ones are added.

</details>

## 6 - Sort the to-do list items in order of creation

<details><summary><strong>Você deve garantir que os itens adicionados à lista não apareçam em uma ordem diferente da que foram criados. Por exemplo, ao adicionar os itens `Fazer exercícios do bloco 4`, `Segunda tarefa` e `Anotar dicas de JS`, eles devem constar na lista exatamente nessa ordem.</strong></summary><br />

**What will be checked:**

-   Three items will be created in the list and it will be checked that they are sorted in order of creation - that is, first the first item created, then the second, and so on.

</details>

## 7 - Clicking on a list item should change the item's background color to gray

<details><summary><strong>A cor deve ser alterada para para o nome da cor (gray) e não qualquer outro padrão de cores.</strong></summary><br />

**What will be checked:**

-   When the page loads, the list items**there is not**o estilo CSS`background-color: gray`;

-   When clicking on an item in the list, it has the CSS style`background-color: gray`.

</details>

## 8 - It must not be possible to select more than one element from the list at the same time

<details><summary><strong>Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo</strong></summary><br />

**What will be checked:**

-   It will be verified that when an element of the list is selected, the previously selected element is no longer selected. This is verified through the presence or not of the style`background-color: gray`not element.

</details>

## 9 - Double-clicking on an item causes it to be crossed out, indicating that it has been completed. It should be possible to undo this action by double-clicking the item again

<details><summary><strong>Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through". Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.</strong></summary><br />

**What will be checked:**

-   Before the action is fired, the element added to the list doesn't even have the class`completed`nor the style`text-decoration: line-through solid black`;

-   By double-clicking on the item in the list, it has the class`completed`and the style`text-decoration`with the value`line-through solid black`;

-   It will be verified that, with a second double click, a complete element is no longer complete.

</details>

## 10 - Add a button that when clicked should delete all items in the list

<details><summary><strong>Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista</strong></summary><br />

**What will be checked:**

-   It will be verified that there is an element`button`com o id`apaga-tudo`;

-   It will be verified that, since a list has tasks, a click on the button leaves it empty.

</details>

## 11 - Add a button that when clicked removes**only**the finished elements of your list

<details><summary><strong>Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista</strong></summary><br />

**What will be checked:**

-   It will be verified that there is an element`button`com o id`remover-finalizados`;

-   It will be verified that, by clicking the button, all elements marked as done are removed from the list.

</details>

* * *

# Bonus Requirements

## 12 - Add a button that saves the contents of the list. If you close and reopen the page, the list should remain in the state it was in.

<details><summary><strong>Adicione um botão com id="salvar-tarefas" que salva o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava</strong></summary><br />

**What will be checked:**

-   It will be verified that there is an element`button`com o id`salvar-tarefas`;

-   It will be verified that when the list has multiple elements, some of which are marked as finished, a reload of the page keeps the list exactly as it is.

</details>

## 13 - Add two buttons, which allow moving the selected item up or down in the task list

<details><summary><strong>Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas</strong></summary><br />

:warning: Important points about this bonus requirement: :warning:

-   Before starting to develop this functionality, stop and think:</br>

What does it mean to move an item in a list up or down in the**_DOM_**? :thinking:</br>

:bulb: You already have all the skills needed to do this :smiley:.

-   Get into the habit of thinking about special cases when building programs. What happens if the user tries to move the first item up or the last item down?

**What will be checked:**

-   The existence of two elements will be verified`button`, one with the id`mover-cima`and the other with the id`mover-baixo`;

-   It will be verified that, since several elements have been added to the list, moving them in different ways leaves them in the expected positions;

-   It will be verified that, if any element is finalized, this status must persist even if the element is moved;

-   It will be verified that, if no element is selected, clicking on the buttons does not change the list;

-   It will be verified that an element that is selected must remain selected even after being moved;

-   _Special case!_It will be verified that, if you try to raise the element at the top of the list or, if you try to lower the last element of the list, this should not be changed.

</details>

## 14 - Add a button that, when clicked, removes the selected item

<details><summary><strong>Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado</strong></summary><br />

**What will be checked:**

-   Check for the presence of an element`button`with an id`remover-selecionado`;

-   It will be verified that, on clicking the button, only the selected element is removed.

</details>
