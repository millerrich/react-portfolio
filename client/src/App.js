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
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/home"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
        <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        <Route path={process.env.PUBLIC_URL + "*"} component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

