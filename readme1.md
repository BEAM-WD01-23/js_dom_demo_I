# dom, (window, document)
    Document Object Model (DOM)
    It is a programming interface for web documents. It represents the structure representation of an html 
    documents and it provides properties to interact with its elements. The DOM is created by the browser 
    when a web page is loaded and can be accessed and manipulated using Javascript.

# Window

    It is the interface represents a window containing a DOM document. Window represents the window that the script is running, 
    is exposed a javascript code. The `window` object represents the browser window or tab that contains the current web page. It acts as the global object for the browser context and provides various properties, methods, and events related to the browser window.

    Here are some examples of using the "window" object:

    -1 Accessing the current URL: var url = window.location.href;
    -2 Opening a new browser window or tab: window.open('https://www.example.com');
    -3 Controlling the size and position of the browser window: window.resizeTo(800, 600); window.moveTo(100, 100);
    -4 Displaying a confirmation dialog: var result = window.confirm('Are you sure?');


# Document

    The `document` property points to the DOM document loaded in that window. `The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.` The "document" refers to the global object representing the current web page loaded in the browser.

    - Here are some common uses of the "document" object:
  
    1-Accessing and modifying elements on the web page (e.g., changing content, styles, or attributes)
        ex: document.getElementById('myElement');
    2-Creating new elements dynamically and adding them to the document.
        ex: document.createElement('div'); document.body.appendChild(newElement);
    3-Manipulating the structure of the document (e.g., adding, removing, or rearranging elements).
        ex: document.getElementById('myElement').innerHTML = 'New content';
    3-Handling events related to the document (e.g., listening for clicks or form submissions).
        ex: document.getElementById('myButton').addEventListener('click', function() { // handle click event });

    ex: document.body.textContent = 'Hello';
    console.log('Hello');

    `body` `doucument.body`

- linking our html page with javascript page 
- 
- //ways to link javascript page with html page
//i
    <script> 
        let a =10;
        let b = 5;
        document.body.textContent = a + b; //15 
    </script>
//ii
    create a javascript page and link it to you html page // <script src="index.js"> </script>
