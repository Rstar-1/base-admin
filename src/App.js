import { Route, Routes } from "react-router-dom";
// Components
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
// Auth Pages
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// Other pages
import Coming from "./pages/admin/layouts/components/coming/Coming";
import Error from "./pages/error/Error";
// Pages
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Seo from "./pages/admin/layouts/components/seo/Seo";

const  App = () => {
  return (
    <div className="App relative">
        <div className="flex bgtertiary h-100 overflow-hidden">
          <div className="w-side md-hidden sm-hidden">
            <Sidebar />
          </div>
          <div className="w-route mlpx9 md-mlpx1 sm-mlpx1 mrpx9 md-mrpx1 sm-mrpx1">
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              {/* ======================= Start-Login ======================= */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* ======================= Start-Login ======================= */}
              {/* ======================= Start-Pages ======================= */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/seo" element={<Seo />} />
              {/* ======================= End-Pages ======================= */}
              {/* ======================= Start-Error ======================= */}
              <Route path="*" element={<Error />} />
              <Route path="/coming" element={<Coming />} />
              {/* ======================= End-Error ======================= */}
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
