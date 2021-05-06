import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./views/Home"
import Admin from "./views/Admin"

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
