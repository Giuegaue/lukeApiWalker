import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import People from './components/people';
import Planet from './components/planet';
import Home from "./components/Home";


function App() {


return (
    <div>
      <Home/>
      <Switch>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planet/:id">
          <Planet />
        </Route>
      </Switch>
    </div>);
}


export default App;
