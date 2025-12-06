import { Routes, Route } from "react-router"
import { DashboardPage } from './pages/DashboardPage';
import { RfpsPage } from "./pages/RfpsPage";
import { VendorsPage } from "./pages/VendorsPage";
import { EmailsPage } from "./pages/EmailsPage";
import { ProposalsPage } from "./pages/ProposalsPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />}/>
      <Route path='/rfps' element={<RfpsPage />}/>
      <Route path='/vendors' element={ <VendorsPage/>} />
      <Route path='/emails' element={<EmailsPage /> }/>
      <Route path="/proposals" element={<ProposalsPage />} />
    </Routes>
  );
}

export default App;
