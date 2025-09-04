## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById returns only one element by its unique id.getElementsByClassName returns a HTML collection (array like object) of all the elements with the same class name. querySelector returns the first element that matches a CSS selector. querySelectorAll returns all elements that match a CSS selector.

## 2. How do you create and insert a new element into the DOM?

Ans: First, we create a new element using document.createElement(). Then we add text or content using innerText or innerHTML. Finally, we insert it into the DOM using appendChild().

## 3. What is Event Bubbling and how does it work?

Ans: Event bubbling means an event starts from the child element and then goes up to its parent elements. Example: if we click a button inside a div, first the button event runs then the div event also runs.

## 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: In Event Delegation, instead of adding event listeners to every small child element, we add just one event listener to the parent element. When a child element is clicked the event goes up to the parent and from there we can check which child was clicked by using the event object.

Event delegation is useful because it reduces the number of event listeners in the code, which makes the program faster and easier to manage. It also works for new child elements that are added later without writing extra code.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: The preventDefault() method is used to stop the normal action of an element. For example, when we click on a link it normally opens a new page or when we click on a form button it submits the form. If we use preventDefault() these default actions will not happen.

The stopPropagation() method is used to stop the event from moving up to parent elements. For example, when we click on a child element, the event also goes to its parent because of event bubbling. If we use stopPropagation() the event will only work on the child and will not reach the parent.
