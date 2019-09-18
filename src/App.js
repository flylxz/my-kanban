import React from "react";
import Base from "./components/Base/Base";

class App extends React.Component {
  componentWillMount = () => {
    console.log("will mount");
  };

  render() {
    console.log("render");
    return <Base />;
  }

  componentDidMount = () => {
    console.log("did mount");
  };

  componentWillUnmount = () => {
    console.log("unmount");
  };
}
export default App;
