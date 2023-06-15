/**
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm tag h1 </h1>
 *      <h2>I'm tag h2 </h2>
 *  </div>
 * </div>
 * 
 */




const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", 
        { id: "child" }, 
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    ));

console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);