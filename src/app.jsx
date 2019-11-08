import React, { Component } from "react";
import axios from "axios";
import TopSpot from "./topspot";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        <div className="col-fluid">
          <div
            className="card"
            style={{
              top: "50px",
              left: "135px",
              width: "1180px",
              height: "110px",
              borderWidth: "1px",
              borderColor: "white",
              color: "white",
              backgroundColor: "transparent"
            }}
          >
            <div className="card-body">
              <div className="col">
                <h2>San Diego Top Spots</h2>
                <h6>
                  A list of the top places to see in San Diego, California.
                </h6>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              top: "90px",
              left: "135px",
              width: "1180px",
              borderWidth: "1px",
              borderColor: "white",
              color: "white",
              backgroundColor: "transparent"
            }}
          >
            <div className="card-body">
              {this.state.topspots.map(topspot => (
                <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location}
                />
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
