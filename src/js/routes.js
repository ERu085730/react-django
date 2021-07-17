import { Route, Switch } from "react-router-dom";
import { Content } from "./content.js";
import { Detail } from "./detail.js";
import { About } from "./about.js";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Content} />
      <Route path="/about" component={About} />
      <Route path="/:articleId" component={Detail} />
    </Switch>
  );
}
