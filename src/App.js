import React, { Component } from "react";
import Welcome from "./components/welcome/welcome";
import Clock from "./components/Clock/clock";
import Contact from "./components/Contact/contact";
//Import the Navigation component
import Navigation from "./components/navigation/navigation";
import { Route,Switch } from "react-router-dom";
import Errorpage from "./components/Errorpage/Error";

class App extends Component {
  render() {
    return (
      <div>
        {/* render the Navigation component */}
        <Navigation />
        <Switch >
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="eric" />}
         
        />

        <Route
          
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.params.name} />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/Errorpage" component={Errorpage} />
         </Switch>
      </div>
    );
  }
}
export default App;