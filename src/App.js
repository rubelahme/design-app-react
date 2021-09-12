import "./style/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
