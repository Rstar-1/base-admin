import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./pages/error/Error";
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Coming from "./pages/admin/layouts/components/coming/Coming";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <div className="flex bg-e8f2fc h-100 overflow-hidden">
          <div className="w-side md-hidden sm-hidden">
            <Sidebar />
          </div>
          <div className="w-route mlpx9 md-mlpx8 sm-mlpx1 mrpx9 md-mrpx8 sm-mrpx1">
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              {/* ======================= Start-Login ======================= */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* ======================= Start-Login ======================= */}
              {/* ======================= Start-Pages ======================= */}
              <Route path="/dashboard" element={<Dashboard />} />
              {/* ======================= End-Pages ======================= */}
              {/* ======================= Start-Error ======================= */}
              <Route path="*" element={<Error />} />
              <Route path="/coming" element={<Coming />} />
              {/* ======================= End-Error ======================= */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
