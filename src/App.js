const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Loba",
            animal: "Perro",
            breed: "Corriente",
        }),
        React.createElement(Pet, {
            name: "Princesa",
            animal: "Perro",
            breed: "Hell Hound",
        }),
        React.createElement(Pet, {
            name: "Arena",
            animal: "Cat",
            breed: "Corriente",
        }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
