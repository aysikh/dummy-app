import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    grid: {
      height: '50vh',
    },
    paper: {
      margin: theme.spacing(4, 6),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginBottom: theme.spacing(4),
      alignItems: "center",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function LogInForm({checked}, props) {
    const classes = useStyles();
 
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [errors, setErrors]=useState("")

    
  useEffect(()=> {
    return props.loggedInStatus ? redirect() : null
  }, [])

  const handleEmailChange = (event) => {
      setEmail(event.target.value)
  };

  const handlePasswordChange = (event) => {
      setPassword(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    let user = {
          name: name,
          email: email,
          password: password
        }
        
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            props.handleLogin(response.data)
            redirect()
          } else {
            setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
      };

    const redirect = () => {
        props.history.push('/')
      }

    const handleErrors = () => {
        return (
          <div>
            <ul>
            {errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      }

    return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Grid container component="main" className={classes.grid} >
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
    
                    <Grid item>
                    <Link href="/newuser" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
                </form>
                <div>
                    {
                        errors ? handleErrors() : null
                    }
                </div>
            </div>
            </Grid>
        </Grid>
     </Collapse>
    );
  }