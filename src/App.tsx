import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@bcgov/design-system-react-components";
import { Home } from "./pages/Home";
import { ErrorDetails } from "./pages/ErrorDetails";
import { Feedback } from "./pages/Feedback";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header title="Error Lookup Tool" />
        <main className="container mx-auto px-4 py-8">
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
