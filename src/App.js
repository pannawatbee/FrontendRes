import {BrowserRouter,Switch,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Contract from "./pages/Contract";
import './App.css';

function App() {
  return (
    <div className="App">
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
