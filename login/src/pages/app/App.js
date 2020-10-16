import React, { Component } from "react";
import Login from "../login/login";
import Home from "../home/home";
import Cookies from 'js-cookie';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    var boolean = false;
   if(Cookies.get("user")){
     boolean = true;
     fakeAuth.authenticate();
   }
    this.state = {
      isLoggedIn: boolean,
      user: "",
    };
   // this.handleLoginChange = this.handleLoginChange.bind(this);
  }

callbackFunction = (childData, user) => {
  this.setState(
    {
      isLoggedIn: childData , user: user
    },
    function () {
      fakeAuth.authenticate();
    }
    )
}

  render() {
    return (
      <Router>
        <div className="main">
          <nav>
            <AuthButton />
                <Link className="link" to="/">Home</Link>
          </nav>
          <Switch>
            <Route path="/login">
              <Login onLogin={this.callbackFunction} />
            </Route>
            <PrivateRoute path="/">
              <Home data={this.state.user} />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
  },
};


function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p style={{margin: 0}}>
      Welcome!{" "}
      <button 
        onClick={() => {
          fakeAuth.signout(() => history.push("/login"));
          Cookies.remove("user");
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p style={{margin: 0}}>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}


