import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeaderPage } from "./pages/Header";
import { FooterPage } from "./pages/Footer";
import { ErrorDetails } from "./pages/ErrorDetails";
import { Feedback } from "./pages/Feedback";
import { UpdateLog } from "./pages/UpdateLog";
import { Troubleshooting } from "./pages/Troubleshooting";

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
