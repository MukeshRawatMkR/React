/*-> to create a HTML element?
const heading=React.createElement("h1", {id:"heading", xyx: "abc"}, "Hello World from React!");
console.log(heading);//returns object/react element.
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/*->to create nested structure in HTML
const parent=React.createElement("div", {id:"parent"},React.createElement("div", {id:"chile"},React.createElement("h1", {},"I'm a h1 tag")));
console.log(parent);//returns object/react element.
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*->to create siblings using ->[]
const parent=React.createElement("div", {id:"parent"},React.createElement("div", {id:"chile"},[React.createElement("h1", {},"I'm a h1 tag"),React.createElement("h2", {},"I'm a h2 tag"),]));
console.log(parent);//returns object/react element.
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

//Exercise:
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag"),
      ]),
    ],
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
    ])
  );
  console.log(parent); //returns object/react element.
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  
