
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Landing from './components/Landing'
import Auth from './view/Auth'
import AuthContextProvider from './context/AuthContext'
import DashBoard from './view/DashBoard';




function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/login' render={props => <Auth {...props} authRoute='login'></Auth>} />
          <Route exact path='/register' render={props => <Auth {...props} authRoute='register'></Auth>} />
          <Route exact path='/dashboard' component={DashBoard} />
        </Switch>
      </Router >
    </AuthContextProvider>

  );
}

export default App;
