import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
/*
  Auth(SpecificComponent, option, adminRoute = null)
  Auth는 hoc이기 때문에 LandingPage / LoginPage / RegisterPage 등을 감싼다.

    SpecificComponent : 표현될 해당 페이지
            LandingPage   => 첫페이지
            LoginPage     => 로그인페이지
            RegisterPage  => 회원가입페이지
    option 
            null     => 아무나 출입이 가능한 페이지
            true     => 로그인한 유저만 출입이 가능한 페이지
            false    => 로그인한 유저는 출입 불가능한 페이지
    adminRoute
            null     => 어드민 유저가 아니여도 출입가능  (기본값 null로 설정)
            true     => 어드민 유저만 출입가능
 */
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} /> 
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
