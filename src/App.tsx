import { Routes, Route } from "react-router"
import { DashboardPage } from './pages/DashboardPage';
import { RfpsPage } from "./pages/RfpsPage";


function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />}/>
      <Route path='/rfps' element={<div>
        <RfpsPage />
      </div>} />
      <Route path='/vendors' element={<div>Vendors Page Coming Soon</div>} />
      <Route path='/emails' element={<div>Emails Page Coming Soon</div>} />
    </Routes>
  );
}

export default App;
