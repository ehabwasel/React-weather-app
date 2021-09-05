import { react, useState } from "react";
import Search from "./Component/Search";
import Chart from "./Component/Chart";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
  useLocation,
} from "react-router-dom";
import { FaRegCaretSquareDown } from "react-icons/fa";
const PageNotFound = () => {
  return <h2>This page is not found</h2>;
};

function App() {
  console.log();
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/:cityId">
            <Chart />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
