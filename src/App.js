import React from "react";

import calculate from "./calculate";
import "./App.css";
import AllButtons from "./AllButtons";

export default class App extends React.Component {
  // const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");
  // const [inputValue, setInputValue] = useState("");
  state = {
    total: null,
    next: null,
    operation: null,
  };

  // const ops = ["/", "*", "+", "-", ".", "(", ")", "%"];

  // const handleClick = (value) => {
  //   debugger;
  //   if (inputValue === "") {
  //     setCalc("");
  //   }

  //   console.log(calc.slice(-1));
  //   if (
  //     (ops.includes(value) && calc === "") ||
  //     (ops.includes(value) && ops.includes(calc.slice(-1)))
  //   ) {
  //     return;
  //   }

  //   setCalc(calc + value);
  //   setInputValue(calc + value);
  // };

  handleClick = (e) => {
    const buttonName = e.target.name;
    debugger;
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div className="main">
          <div className="container">
            {/* input box */}
            <div className="display">
              <input
                type="text"
                id="screen"
                placeholder="0"
                value={
                  this.state.next == null && this.state.total == null
                    ? ""
                    : this.state.next || this.state.total
                }
                // onChange={handleChange}
              />
            </div>

            {/* all buttons */}
            <AllButtons handleClick={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}
