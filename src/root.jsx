import { Component } from "react";

class Root extends Component {
  render() {
    function clickHello(event) {
      console.log("Hello World", event);
    }

    function onChangeText(event) {
      console.log("typing...", event);
    }
    return (
      <div>
        <h1 onClick={clickHello}>Hello World</h1>
        <button
          onClick={function () {
            clickHello;
          }}
        >
          click me
        </button>
        <input onChange={onChangeText} type="text" />
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
