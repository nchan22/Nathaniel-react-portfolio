import React from "react";

function Header() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
