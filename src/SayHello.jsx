import React from "react";

class SayHello extends React.Component {
  render() {
    console.log(this.props);
    // let title= this.props.title.toUpperCase();
    const { title } = this.props;
    return (
      <div>
        <h1> Hello G27 {title} </h1>
        {this.props.children}
      </div>
    );
  }
}
export default SayHello;
