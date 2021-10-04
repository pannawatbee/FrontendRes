import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Contract from "./pages/Contract";
import ReviewCard from "./pages/ReviewCard";
import CategoryRes from "./pages/CategoryRes";
import ReviewWrite from "./pages/ReviewWrite";
import AdminUpdate from "./pages/AdminUpdate";
import Login from "./pages/Login";
import "./assets/css/main.css";
import ReviewRes from "./pages/ReviewRes";
import Register from "./pages/Register";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/ReviewRes" component={ReviewRes} />
          <Route path="/ReviewCard" component={ReviewCard} />
          <Route path="/CategoryRes" component={CategoryRes} />
          <Route path="/ReviewWrite" component={ReviewWrite} />
          <Route path="/Contract" component={Contract} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/AdminUpdate" component={AdminUpdate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
