import { BrowserRouter, Routes, Route, } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Laout from "./Components/Laout";
import AddBanks from "./Pages/AddBanks";
import SingleBank from "./Pages/SingleBank";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/"
          element={<PrivateRoute>
            <Laout>
              <Home />
            </Laout>
          </PrivateRoute>} />

        <Route path="/addbanks"
          element={<PrivateRoute>
            <Laout>
              <AddBanks />
            </Laout>
          </PrivateRoute>} />

        <Route path="/singlebank/:id"
          element={<PrivateRoute>
            <Laout>
              <SingleBank />
            </Laout>
          </PrivateRoute>} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;