import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeaderPage } from "./pages/Header";
import { ErrorDetails } from "./pages/ErrorDetails";
import { Feedback } from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderPage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error/:errorCode" element={<ErrorDetails />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
