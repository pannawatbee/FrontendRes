import {BrowserRouter,Switch,Route} from "react-router-dom"
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import Contract from "./pages/Contract";
import './assets/css/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
       <Route path='/homepage' component={HomePage}/ >
       <Route path='/contract' component={Contract}/ >
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
