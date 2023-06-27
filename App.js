import React from "react";
import ReactDOM from "react-dom/client";

//  JSX (transpiled before it reaches the JS) - PARCEL - Babel

//  JSX => Babel transpiles it to React.createElement => React.createElement-JS Object => HTMLElement(render)
//const jsxheading = (<h1 className="head">Namaste React using JSX</h1>);

//  React Element
const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
)

//  React Functional Component
const HeadingElement = () => {
    return <h1 className="heading">Namaste React functional component</h1>
}


const Title = () => (
    <h1 className="head">
        Namaste React using JSX
    </h1>
);

const HeadingCoponent = () => (
    <>
        <div id="container">
            <Title/>
            <h1 className="heading">Namaste component composition</h1>
        </div>
        <>
        <div id="container">
            <Title/>
            <h1 className="heading">Namaste component composition</h1>
        </div>
        </>
    </>
    
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCoponent/>)




