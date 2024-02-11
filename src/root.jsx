import { Component } from "react";

class Root extends Component {
  constructor(props) {
    spuer(props);
    this.state = {
      title: "Webbrain",
      count: 0,
    };
  }
  onChangeText() {
    // title = event.target.value
    this.setState({title: event.target.value, count:1})
    console.log("this", this);
    // console.log("event", event.target.value);
    // console.log("title", title);
    console.log("======");
  }
  render() {
    function clickHello(event) {
      console.log("Hello World", event);
    }

    
    return (
      <div>
        <h1 onClick={clickHello}>Hello Webbrain {this.state.title}</h1>
        <button onClick={() => clickHello("Webbrain")}>click me</button>
        <input onChange={(event) => this.onChangeText(event)} type="text" />
        <select name="" id="">
          <option value="Uz">Uzbek</option>
          <option value="Eng">English</option>
          <option value="kor">Korea</option>
        </select>
      </div>
    );
  }
}

export default Root;
