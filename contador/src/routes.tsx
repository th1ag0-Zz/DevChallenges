import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home'
import Contador from './pages/Contador'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/contador" exact component={Contador} />
    </BrowserRouter>
  );
}


export default Routes;