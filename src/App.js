import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { LandingPage } from "pages/Landing";
import { HistoryPage } from "pages/History";
import { ConditionalRoute } from "components/ConditionalRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <ConditionalRoute
          path="/history"
          redirectTo="/history"
          canActivate={true}
          component={HistoryPage}
        />
        <ConditionalRoute 
          path="/"
          redirectTo="/landing"
          canActivate={true}
          component={LandingPage}
        />
      </Switch>
    </Router>
  );
}
