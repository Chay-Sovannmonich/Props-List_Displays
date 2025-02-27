import React from "react";
import Place from "./components/Place.jsx";
import { AVAILABLE_PLACES } from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>PlacePicker</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {AVAILABLE_PLACES.map((place) => (
              <Place
                key = {place.id}
                data = {place}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
