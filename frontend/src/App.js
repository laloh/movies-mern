import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";

function App() {
  const [user, setUser] = useState(null);
  async function login(user = null) {
    // default user to null
    setUser(user);
  }

  async function logOut() {
    setUser(null);
  }

  return (
    <div className="App">
      <NavBar bg="light" expand="lg">
        <NavBar.Brand href="#home">Movie Reviews</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav">
          React-Bootstrap
        </NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {user ? (
                <a onClick={logOut}>Logout User</a>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      <Switch>
        <Route exact path={["/", "/movies"]} component={MoviesList}></Route>
        <Route
          path="/movies/:id/review"
          render={(props) => <AddReview {...props} user={user} />}
        ></Route>
        <Route
          path="/movies/:id/"
          render={(props) => <Movie {...props} user={user} />}
        ></Route>
        <Route
          path="/login"
          render={(props) => <Login {...props} login={login} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
