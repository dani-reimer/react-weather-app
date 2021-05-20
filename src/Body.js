import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import Updated from "./Updated";
import CurrentTemperature from "./CurrentTemperature";
export default function Body() {
  return (
    <div className="Body">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6 first-column">
                <Search />
                <Updated />
              </div>

              <div className="col-6 current-temperature-section">
                <CurrentTemperature />
              </div>
            </div>
          </div>
          <div className="row forecast">
            <Forecast />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
