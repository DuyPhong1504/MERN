
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Landing from './components/Landing'
import  Auth from './view/Auth'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login'></Auth>} />
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register'></Auth>} />
      </Switch>
  
    </Router >
  );
}

export default App;
