import { BrowserRouter, Routes, Route, } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Formats from "./Pages/Formats";
import Laout from "./Components/Laout"
import Transactions from "./Pages/Transactions";
import Login from "./Pages/Login"
import IslamiBankStatement from "./Pages/SocialislamiBank/IslamiBankStatement"
import IslamiBankTransaction from "./Pages/SocialislamiBank/IslamicBankTran"
import IslamiBankCertificate from "./Pages/SocialislamiBank/IslamiBankCertificate"
import EBLBankTran from "./Pages/EBLBank/EBLBankTran"
import UCBBankTran from "./Pages/UCBBank/UCBBankTran"
import UCOBankTran from "./Pages/UCOBank/UCOBankTran"
import CanaraTransaction from "./Pages/CanaraBank/CanaraBankTran"
import EBLStatement from "./Pages/EBLBank/EBLStatement"
import UCBBankStatement from "./Pages/UCBBank/UCBBankStatement"
import UCOBankStatement from "./Pages/UCOBank/UCOBankStatement"
import CanaraBankStatement from "./Pages/CanaraBank/CanaraBankStatement"
import EBLBankSolvency from "./Pages/EBLBank/EBLBankSolvency"
import UCBbankCertificate from "./Pages/UCBBank/UCBbankCertificate"
import UCObankCertificate from "./Pages/UCOBank/UCOBankCertificate"
import CanarabankCertificate from "./Pages/CanaraBank/CanaraBankCertificate"
import CityBankTran from "./Pages/CityBank/CityBankTran";
import CityBankStatement from "./Pages/CityBank/CityBankStatement";
import CityBankCertificate from "./Pages/CityBank/CityBankCertificate";
import OneBankTran from "./Pages/OneBank/OneBankTran";
import OneBankStatement from "./Pages/OneBank/OneBankStatement";
import OnebankCertificate from "./Pages/OneBank/OneBankCertificate";
import SCBBankTran from "./Pages/SCBBank/SCBBankTran";
import BankAsiaTwo from "./Pages/BankAsia/BankAsiaTwo";
import BankAsiaOne from "./Pages/BankAsia/BankAsiaOne";
import BankAsiaTransaction from "./Pages/BankAsia/BankAsiaTran";
import SCBBankStatement from "./Pages/SCBBank/SCBBankStatement";
import SCBbankCertificate from "./Pages/SCBBank/SCBBankCertificate";
import SoutheastBankTran from "./Pages/SoutheastBank/SoutheastBankTran";
import SoutheastBankStatement from "./Pages/SoutheastBank/SoutheastBankStatement";
import SoutheastBankCertificate from "./Pages/SoutheastBank/SoutheastBankCertificate";
import UttraBankTran from "./Pages/UttaraBank/UttraBankTran";
import UttraBankStatement from "./Pages/UttaraBank/UttraBankStatement";
import UttaraBankCertificate from "./Pages/UttaraBank/UttaraBankCertificate";
import ABBankTran from "./Pages/ABBank/ABBankTran";
import ABBankStatement from "./Pages/ABBank/ABBankStatement";
import ABBankCertificate from "./Pages/ABBank/ABBankCertificate";
import JamunaBankOne from "./Pages/JamunaBank/JamunaBankOne";
import JamunaBankThree from "./Pages/JamunaBank/JamunaBankThree";
import JamunaBankOneTran from "./Pages/JamunaBank/JamunaBankOneTran";
import NCCBankStatement from "./Pages/NCCBank/NCCBankStatement";
import NCCBankTran from "./Pages/NCCBank/NCCBankTran";
import NCCBankCertificate from "./Pages/NCCBank/NCCBankCertificate";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/"
          element={<PrivateRoute>
            <Laout>
              <Formats />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions"
          element={<PrivateRoute>
            <Laout>
              <Transactions />
            </Laout>
          </PrivateRoute>} />

        {/* transactions route */}
        <Route path="/transactions/islamic_bank"
          element={<PrivateRoute>
            <Laout>
              <IslamiBankTransaction />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/ebl_bank"
          element={<PrivateRoute>
            <Laout>
              <EBLBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/ucb_bank"
          element={<PrivateRoute>
            <Laout>
              <UCBBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/uco_bank"
          element={<PrivateRoute>
            <Laout>
              <UCOBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/canara_bank"
          element={<PrivateRoute>
            <Laout>
              <CanaraTransaction />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/city_bank"
          element={<PrivateRoute>
            <Laout>
              <CityBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/one_bank"
          element={<PrivateRoute>
            <Laout>
              <OneBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/scb_bank"
          element={<PrivateRoute>
            <Laout>
              <SCBBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/southeast_bank"
          element={<PrivateRoute>
            <Laout>
              <SoutheastBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/uttra_bank"
          element={<PrivateRoute>
            <Laout>
              <UttraBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/ab_bank"
          element={<PrivateRoute>
            <Laout>
              <ABBankTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/asia_bank"
          element={<PrivateRoute>
            <Laout>
              <BankAsiaTransaction />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/jamuna_bank"
          element={<PrivateRoute>
            <Laout>
              <JamunaBankOneTran />
            </Laout>
          </PrivateRoute>} />

        <Route path="/transactions/ncc_bank"
          element={<PrivateRoute>
            <Laout>
              <NCCBankTran />
            </Laout>
          </PrivateRoute>} />

        {/* statement formate routes */}

        <Route path="/ebl_bank"
          element={<PrivateRoute>
            <EBLStatement />
          </PrivateRoute>} />

        <Route path="/islami_bank"
          element={<PrivateRoute>
            <IslamiBankStatement />
          </PrivateRoute>} />

        <Route path="/ucb_bank"
          element={<PrivateRoute>
            <UCBBankStatement />
          </PrivateRoute>} />

        <Route path="/uco_bank"
          element={<PrivateRoute>
            <UCOBankStatement />
          </PrivateRoute>} />

        <Route path="/canara_bank"
          element={<PrivateRoute>
            <CanaraBankStatement />
          </PrivateRoute>} />

        <Route path="/city_bank"
          element={<PrivateRoute>
            <CityBankStatement />
          </PrivateRoute>} />

        <Route path="/one_bank"
          element={<PrivateRoute>
            <OneBankStatement />
          </PrivateRoute>} />

        <Route path="/scb_bank"
          element={<PrivateRoute>
            <SCBBankStatement />
          </PrivateRoute>} />

        <Route path="/southeast_bank"
          element={<PrivateRoute>
            <SoutheastBankStatement />
          </PrivateRoute>} />

        <Route path="/uttra_bank"
          element={<PrivateRoute>
            <UttraBankStatement />
          </PrivateRoute>} />

        <Route path="/ab_bank"
          element={<PrivateRoute>
            <ABBankStatement />
          </PrivateRoute>} />

        <Route path="/asia_bank"
          element={<PrivateRoute>
            <BankAsiaOne />
          </PrivateRoute>} />

        <Route path="/jamuna_bank"
          element={<PrivateRoute>
            <JamunaBankOne />
          </PrivateRoute>} />

        <Route path="/ncc_bank"
          element={<PrivateRoute>
            <NCCBankStatement />
          </PrivateRoute>} />

        {/* cirtificate formate routes */}
        <Route path="/islami_bank_certificate"
          element={<PrivateRoute>
            <IslamiBankCertificate />
          </PrivateRoute>} />

        <Route path="/ebl_bank_solvency"
          element={<PrivateRoute>
            <EBLBankSolvency />
          </PrivateRoute>} />

        <Route path="/ucb_bank_solvency"
          element={<PrivateRoute>
            < UCBbankCertificate />
          </PrivateRoute>} />

        <Route path="/uco_bank_solvency"
          element={<PrivateRoute>
            < UCObankCertificate />
          </PrivateRoute>} />

        <Route path="/canara_bank_solvency"
          element={<PrivateRoute>
            <CanarabankCertificate />
          </PrivateRoute>} />

        <Route path="/city_bank_solvency"
          element={<PrivateRoute>
            <CityBankCertificate />
          </PrivateRoute>} />

        <Route path="/one_bank_solvency"
          element={<PrivateRoute>
            <OnebankCertificate />
          </PrivateRoute>} />

        <Route path="/scb_bank_solvency"
          element={<PrivateRoute>
            <SCBbankCertificate />
          </PrivateRoute>} />

        <Route path="/southeast_bank_solvency"
          element={<PrivateRoute>
            <SoutheastBankCertificate />
          </PrivateRoute>} />

        <Route path="/uttara_bank_solvency"
          element={<PrivateRoute>
            <UttaraBankCertificate />
          </PrivateRoute>} />

        <Route path="/ab_bank_solvency"
          element={<PrivateRoute>
            <ABBankCertificate />
          </PrivateRoute>} />

        <Route path="/asia_bank_solvency"
          element={<PrivateRoute>
            <BankAsiaTwo />
          </PrivateRoute>} />

        <Route path="/jamuna_bank_solvency"
          element={<PrivateRoute>
            <JamunaBankThree />
          </PrivateRoute>} />

        <Route path="/ncc_bank_solvency"
          element={<PrivateRoute>
            <NCCBankCertificate />
          </PrivateRoute>} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;