import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/post/:id">
              <Comments></Comments>
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
