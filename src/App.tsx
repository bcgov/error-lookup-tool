import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { HeaderPage } from "./pages/Header/Header";
import { FooterPage } from "./pages/Footer/Footer";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error/:errorCode" element={<ErrorDetails />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/update-log" element={<UpdateLog />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
        </Routes>
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}
