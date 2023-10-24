import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { RestrictedRoute } from "./RestictedRoute";
import { PrivateRoute } from "./PricateRoute";
import { Table } from "./pages/Table/Table";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/table" component={Login} />}
          />
          <Route
            path="/table"
            element={<PrivateRoute redirectTo="/login" component={Table} />}
          />
        </Route>
      </Routes>

    </>
  );
}

export default App;
