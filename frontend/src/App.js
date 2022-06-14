import { BrowserRouter, Routes, Route, } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Laout from "./Components/Laout";
import SingleBank from "./Pages/SingleBank";
import JamunaBankOne from "./Pages/JamunaBankOne";
import JamunaBankTwo from "./Pages/JamunaBankTwo";
import JamunaBankThree from "./Pages/JamunaBankThree";
import Banks from "./Pages/Banks";
import IslamiBankOne from "./Pages/IslamiBankOne";
import BankAsiaOne from "./Pages/BankAsiaOne";
import BankAsiaTwo from "./Pages/BankAsiaTwo";
import NCCBankOne from "./Pages/NCCBankOne";
import NCCBankTwo from "./Pages/NCCBankTwo";
import HSBCBankOne from "./Pages/HSBCBankOne";

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

        <Route path="/banks"
          element={<PrivateRoute>
            <Laout>
              <Banks />
            </Laout>
          </PrivateRoute>} />

        <Route path="/singlebank/:id"
          element={<PrivateRoute>
            <Laout>
              <SingleBank />
            </Laout>
          </PrivateRoute>} />

        <Route path="/jamuna_bank_one"
          element={<PrivateRoute>
            <JamunaBankOne />
          </PrivateRoute>} />

        <Route path="/jamuna_bank_two"
          element={<PrivateRoute>
            <JamunaBankTwo />
          </PrivateRoute>} />

        <Route path="/jamuna_bank_three"
          element={<PrivateRoute>
            <JamunaBankThree />
          </PrivateRoute>} />

        <Route path="/islami_bank_one"
          element={<PrivateRoute>
            <IslamiBankOne />
          </PrivateRoute>} />

        <Route path="/bank_asia_one"
          element={<PrivateRoute>
            <BankAsiaOne />
          </PrivateRoute>} />

        <Route path="/bank_asia_two"
          element={<PrivateRoute>
            <BankAsiaTwo />
          </PrivateRoute>} />

        <Route path="/ncc_bank_one"
          element={<PrivateRoute>
            <NCCBankOne />
          </PrivateRoute>} />

        <Route path="/ncc_bank_two"
          element={<PrivateRoute>
            <NCCBankTwo />
          </PrivateRoute>} />

        <Route path="/hsbc_bank_one"
          element={<PrivateRoute>
            <HSBCBankOne />
          </PrivateRoute>} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;