import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class MouseDirection extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    mouseX: 0,
    mouseY: 0
  }
  this.mouseMove = this.mouseMove.bind(this);
}
mouseMove(e) {
this.setState({
  mouseX: e.clientX,
  mouseY: e.clientY
})
}
render() {
  return (
    <div onMouseMove = {this.mouseMove} className="mouseCanvas">
    Move the mouse to see Magic !!!
    {this.props.render(this.state)}
    </div>
  )

}

}

class RoundBall extends React.Component {
  render() {
    const { mouse } = this.props;
    return (
      <div className = 'roundBall' style={{ position: 'absolute', left: mouse.mouseX, top: mouse.mouseY}}>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Follow the mouse</h2>
        <MouseDirection render={props=>{
          return <RoundBall mouse={props}/>
        }}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
