import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Contract from "./pages/Contract";
import "./assets/css/main.css";
import ReviewRes from "./pages/ReviewRes";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/ReviewRes" component={ReviewRes} />
          <Route path="/contract" component={Contract} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
