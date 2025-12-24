const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.description)
    ]);
};

const App = () => {
    return React.createElement( "div", {}, [
        React.createElement("h1", {}, "Padre Gino's"),
        React.createElement(Pizza, {
            name:"The Pepperoni Pizza",
            description: "A pepperoni Pizza"
        }),
        React.createElement(Pizza, {
            name:"Americano Pizza",
            description: "Doesn't exist"
        }),
        React.createElement(Pizza, {
            name: "Ghanaian Pizza",
            description: "Because I want to"
        }),
        React.createElement(Pizza, {
            name: "Some Random Pizza",
            description: "Probably Poisonous"
        }),
        React.createElement(Pizza, {
            name: "The Hawaiian Pizza",
            description: "Why?"
        })
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
