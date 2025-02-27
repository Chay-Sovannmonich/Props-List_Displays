import React from "react";
import "./index.css";
import { data } from "./data";

const Card = ({ key,Person }) => {
    return (
        <div key={key} className="card">
            <img src={Person.image} alt={Person.name} />
            <h2>{Person.name}</h2>
            <p>{Person.class}</p>
            <em>{Person.hobbies}</em>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            {data.map((person, index) => (
                <Card key={index} Person={person} />
            ))}
        </div>
    );
};

export default App;
