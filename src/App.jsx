import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { jsonchik } from "./jsonchik.js";

function App() {
  const [sum, setSum] = useState(0);
  console.log(typeof sum);
  return (
    <div className="App">
      <p>Сумма = {sum.toFixed(3)}</p>
      {jsonchik.map((json) =>
        json.map((elem, index) => (
          <div key={index}>
            <p>{elem.TrackArtist}</p>
            <p>{elem.Названиетрека}</p>
            <p>
              {Number(Number(elem.inmycurrencyonnextinvoicedate).toFixed(3))}
            </p>
            <button
              onClick={() =>
                setSum(
                  (prev) =>
                    prev +
                    Number(
                      Number(elem.inmycurrencyonnextinvoicedate).toFixed(3)
                    )
                )
              }
            >
              Сложить нужные компоненты
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
