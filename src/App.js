import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CarsContainer from "./containers/CarsContainer";
import UsersContainer from "./containers/UsersContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        This is the Main App!
        <Navbar />
        <CarsContainer />
        <UsersContainer />
      </div>
    );
  }
}

export default App;
