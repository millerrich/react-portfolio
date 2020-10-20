import React from "react";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

