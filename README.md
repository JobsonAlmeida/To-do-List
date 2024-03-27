# To-Do List


## Goal

This is was a mini project made from the course [Curso de JavaScript Completo](https://www.udemy.com/course/javascript-completo-2018-do-iniciante-ao-mestre/?couponCode=GENAISALE24)

The goal to this mini project was receive a hmtl and css code from a to-do list page and perform the functioncionalties using DOM manipulation through javascript language and also saving the data into localStorage. 

To-do list is system where through its web page we can set, delete and edit tasks. Below is a screenshot of this project's web page

<p align="center">
<img src="./images/to-do-list.jpg">
</p>

## Concepts learned

Through this mini project it was possible to exercise properties and methods from document object, DOM elements, event object and localStorage object. Some of those properties and methods used in this project are listened bellow. 

### Document object

- document.createElement(htmlTag)

It creates an element node specified by the htmlTag parameter. 

### DOM elements

-  element.querySelector

The querySelector method returns the first element that matches a CSS selector. It's important to remember that to return all matches (not only the first), use should use the querySelectorAll instead.

- element.className

  It sets the class attribute for an DOM element.

 - element.innerHTML 

The property innerHTML is used to set or get the HTML contained within the element. 

- element.textContent

The property textContent is used to set or get the text contained within the element. 

The essencial difference between innerHTML and textContent i that innerHTML doesn't consider formatting while textContent does. 

 - element.setAttribute(name, value)

   This methos is used to sets the value of an attribute on the specified element.
  
- element.appendChild(childElement)

This method is used to append a node element as the last child of the specified element

element.addEventListener(type, function, useCapture)

This method attaches and event handler to a DOM element. The parameters are: 

type: A case-sensitive string representing the event type to listen for.

listener: The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. Usually we use a function as the listener.

useCapture (optional): A boolean value indicating when events of this type will be dispatched 

false - The handler is executed in the bubbling phase.
true - The handler is executed in the capturing phase.

- element.remove()

   This methods removes the specified element from the DOM.

- element.removeAttribute(attrName)

The removeAttribute method removes an attribute from an element. The parameter attrName is the string specifying the name of the attribute to be removed.

- element.parentElement

The parentElement property returns the parent element of the specified element.

### Event object 

- event.preventDefault()

The preventDefault() method cancels the event if it is cancelable, meaning that the default browser action that belongs to the event will not occur.


 - e.target

The read-only target property for event returns the node element where the event occured. With the node element returne we can use any node property or method such as event.target.getAttribute() and event.target.classList.contains(), for example. 

In this project was not user the currentTarget property which is the element which the event lister was attached.  


currentLi.parentElement.removeChild(currentLi)


### localStorage object

- localStorage.setItem(keyName, keyValue)

The setItem method allows to store values referenced by the key into the localStorage part of the browser. 

- localStorage.getItem(keyName)

  The setItem method allows to retrieve values referenced by the key into the localStorage part of the browser. 


### Note

Through this project it was also possible train long nested DOM codes, like the codes below:

 currentLi.querySelector('.fa-check').classList.remove("displayNone")

 currentLi.querySelector('.fa-check').classList.add("displayNone")


