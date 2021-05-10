import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./component/Navbar";
import Title from "./component/title";
import Home from "./pages/HomePage";
import Details from "./pages/detail";
import Feed from "./pages/feed";
import Search from "./pages/search";
import Counter from "./pages/Counter";
import SignupForm from "./pages/SignupForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title content="WELLCOME TO MY COCKTAILS! WEB page" />

      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/detail" component={Details} />
        <Route path="/search" component={Search} />
        <Route path="/Counter" component={Counter} />
        <Route path="/SignupForm" component={SignupForm} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
