import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const GridComponent = lazy(() => import('./grid-component'));

const AnotherRoute = () => (
  <div>
    Another <a href="/a">route</a>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>{console.log("loading")}Loading...</div>}>
          <Switch>
            <Route exact path="/" component={AnotherRoute} />
            <Route exact path="/a" component={GridComponent} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
