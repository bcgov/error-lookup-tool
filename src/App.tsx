import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { HeaderPage } from "./components/Header/Header";
import { FooterPage } from "./components/Footer/Footer";
import { ErrorDetails } from "./pages/ErrorDetails/ErrorDetails";
import { Feedback } from "./pages/Feedback/Feedback";
import { UpdateLog } from "./pages/UpdateLog/UpdateLog";
import { Troubleshooting } from "./pages/Troubleshooting/Troubleshooting";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <HeaderPage />
        <div className="content-wrapper">
          <div className="blue-background"></div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/error/:errorCode" element={<ErrorDetails />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/update-log" element={<UpdateLog />} />
              <Route path="/troubleshooting" element={<Troubleshooting />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}
