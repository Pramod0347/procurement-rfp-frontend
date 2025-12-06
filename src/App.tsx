import { Routes, Route } from "react-router"
import { DashboardPage } from './pages/DashboardPage';
import { RfpsPage } from "./pages/RfpsPage";
import { VendorsPage } from "./pages/VendorsPage";
import { EmailsPage } from "./pages/EmailsPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />}/>
      <Route path='/rfps' element={<div>
        <RfpsPage />
      </div>} />
      <Route path='/vendors' element={<div>
        <VendorsPage />
      </div>} />
      <Route path='/emails' element={<div>
        <EmailsPage />
      </div>} />
    </Routes>
  );
}

export default App;
