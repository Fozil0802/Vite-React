import { Component } from "react";
import SayHello from "./SayHello";
import Goodbay from "./Goodbay"
class Root extends Component {
  render() {
    return (
      <div>
        <SayHello />;
        <Goodbay />;
      </div>
    );
  }
}

export default Root;
