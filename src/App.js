import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './home'
import PageSearchResult from './page-search-results';
import PageArtist from './pageartist'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/busqueda' component={PageSearchResult} />
        <Route exact path='/artist' component={PageArtist} />
      </Switch>
      </Header>
    </BrowserRouter>
  )
}

export default App;
