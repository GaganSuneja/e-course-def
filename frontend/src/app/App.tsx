import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import './styles/styles.scss';
import { USER_ROLES } from './constants';
import Profile from './pages/profile';
import About_us from './pages/about_us';
import ourVision from './pages/our_vision';
import NotAllowed from './pages/notAllowed';
import Module from './components/module';
import SecuredRoute from './routes/secured_routes';
import Footer from './components/footer';
import Navigation from './pages/navigation/index';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Login}/>
        <SecuredRoute
          path="/course"
          allowedTo={[USER_ROLES.USER, USER_ROLES.PUBLISHER]}
          exact
          component={Navigation}
        />
        <SecuredRoute
          path="/module/:id"
          allowedTo={[USER_ROLES.USER, USER_ROLES.PUBLISHER]}
          component={Module}
        />
        <SecuredRoute
          path="/admin"
          allowedTo={[USER_ROLES.PUBLISHER]}
          component={Admin}
          isHeaderDisabled={true}
          isFooterDisabled={true}
        />
        <Route path="/login" component={Login}/>
        <SecuredRoute
          path="/profile"
          allowedTo={[USER_ROLES.USER, USER_ROLES.PUBLISHER]}
          component={Profile}
        />
        <Route path="/about-us" component={About_us}/>
        <Route path="/our-vision" component={ourVision}/>
        <SecuredRoute allowedTo={[USER_ROLES.USER, USER_ROLES.PUBLISHER]} path="/course" component={Navigation}/>
        <Route path="*" component={NotAllowed}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
