import { Theme } from "@carbon/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/:zip" element={<WeatherPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;