import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { Provider } from 'react-redux'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import PokemonDetail from './pages/PokemonDetail'
import Favorites from './pages/Favorites'
import './App.css';
import store from './store'
import themeContext from './contexts/themeContext'

function App() {
  const [theme, setTheme] = useState('light')
  return (
  <Provider store={store}>
    <themeContext.Provider 
      value={{
        theme,
        handleSetTheme:() => theme === 'light' ? setTheme('dark') : setTheme('light')
      }}>
    <Router>
      <div className="App">
        <Navbar/>
        <img src={"https://brandpalettes.com/wp-content/uploads/2018/11/International_Poke%CC%81mon_logo-300x110.png"} alt="logo pokemon" />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/pokemons/:id">
            <PokemonDetail/>
          </Route>
          <Route path="/favorites">
            <Favorites/>
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>

        </Switch>
      </div>
    </Router>
    </themeContext.Provider>
  </Provider>     
  
  // function ProtectedRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if(token) {
//           return <Privacy />
//         } else {
//           return <Redirect to ="/login"/>
//         }
//       }}
//     />
//   );
// }

  // <Route 
  //   path="/privacy"
  //   render={(props) => {
  //     if(token) {
  //       return <Privacy />
  //     } else {
  //       return <Redirect to ="/login"/>
  //     }
  //   }}
  //   >
  // </Route>
  
  // atau
  
  // <ProtectedRoute exact path="/" component={Pokemon}/>

      //  <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      
      //     Learn React
      //   </a>
      // </header>
  );
}

export default App;
