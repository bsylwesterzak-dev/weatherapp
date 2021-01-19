import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Login from './pages/Login';
import SingUp from './pages/SignUp';
import Main from './pages/Main';
import Confirmation from './pages/Confirmation';
import { PageTransition } from '@steveeeie/react-page-transition';
import GlobalStyles from './Themes/GlobalTheme';

function App() {
  return (
    <>
    <GlobalStyles />
      <BrowserRouter>
      <Route render={({ location }) => {
        console.log(location)
        return (
          <PageTransition
            preset='slide'
            transitionKey={location.pathname}
          >
          <Switch location={location}>
            <Route exact path='/' component={Loading}  />
            <Route path='/login' component={Login}  />
            <Route path='/signup' component={SingUp} />
            <Route path='/main' component={Main} />
            <Route path='/confirmation/:token' component={Confirmation} />
          </Switch> 
          </PageTransition>
        );
      }}
      />
      </BrowserRouter>
    </>
  );
}

export default App;
