// Hello
let myElement = "Hello World";

// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// Basic Rules
// myElement = "<h3>Hello React</h3>";
// // wrong
myElement = <h3>Hello React</h3>; 
// correct

// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// Basic Rules
// myElement = <img src="https://placehold.co/600x400" >;
myElement = <img src="https://placehold.co/600x400" />;

// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// Statement in JSX
let myText = "Learn React";
myElement = (
    <div>
        <h3>{myText}</h3>
    </div>
);

// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// Array Processing
let items = ["Table", "Handphone", "Computer"];
myElement = (
    <ul>
        {items.map((item, index) => <li>{item}</li>)}
    </ul>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);