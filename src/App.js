import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Home from "./pages/HomePage";
import Details from "./pages/detail";
import Feed from "./pages/feed";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/detail" component={Details} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
