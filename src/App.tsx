import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@bcgov/design-system-react-components";
import { Home } from "./pages/Home";
import { ErrorDetails } from "./pages/ErrorDetails";
import { Feedback } from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="w-full flex float-left">
          <Header title="Error Lookup Tool" />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error/:errorCode" element={<ErrorDetails />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
