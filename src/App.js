import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import Recipe from './Pages/Recipe/Recipe';
import Search from './Pages/Search/Search';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import ColorButtons from './Components/ColorButtons/ColorButtons';
import useTheme from './Hooks/useTheme';

//page components

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <ColorButtons/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/recipes/:id">
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
