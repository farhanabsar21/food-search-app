import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import Recipe from './Pages/Recipe/Recipe';
import Search from './Pages/Search/Search';
import NotFound from './Pages/NotFound/NotFound';

//page components

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/recipe">
            <Recipe/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="*"> 
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
