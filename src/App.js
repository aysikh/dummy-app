import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Homepage from './components/Homepage'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import MainContainer from './containers/MainContainer'
import LogInContainer from './containers/LogInContainer'
import NewUserContainer from './containers/NewUserContainer'
import NewUserForm from './components/NewUserForm'
import Navbar from './components/Navbar'
import DailyEntryForm from './components/DailyEntryForm'
import Calendar from './components/Calendar'
import HomepageContainer from './containers/HomepageContainer'
import JournalForm from './components/JournalForm'
import Stats from './components/Stats'
import NoMatchPage from './components/NoMatchPage'
import Main from './components/Main'
import CalendarContainer from './containers/CalendarContainer'
import BG from './assets/bg.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${BG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))

export default function App() {
  const classes = useStyles();
  const [user, setUser]=useState({})
  

  const handleLogin = (data) => {
    setIsLoggedIn(true)
    setUser(data.user)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  const loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  useEffect(() => {
    loginStatus()
  }, [])

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Homepage /> 
        <LogInContainer /> 
        <div>
          <Switch>
            <div>
              <Route 
                exact path='/' 
                render={props => (
                <Home {...props} handleLogout={handleLogout} loggedInStatus={isLoggedIn}/>
                )}
              />
              <Route 
                exact path='/login' 
                render={props => (
                <Login {...props} 
                handleLogin={handleLogin} 
                loggedInStatus={isLoggedIn}/>
                )}
              />
              <Route 
                exact path='/signup' 
                render={props => (
                <NewUserForm {...props} 
                handleLogin={handleLogin} 
                loggedInStatus={isLoggedIn}/>
                )}
              />
              <Route path="/home" component={HomepageContainer} />
              <Route path="/user" component={MainContainer} />
              <Route path="/calendar" component={CalendarContainer} />
              <Route path="/journal" component={JournalForm} />
              <Route path="/stats" component={Main} />
              <Route path="/dailyentry" component={DailyEntryForm} />
              <Route component={NoMatchPage} />
            </div>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}