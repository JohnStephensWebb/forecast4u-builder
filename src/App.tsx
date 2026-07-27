import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme } from "@carbon/react";

import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <Theme theme="g100">
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather/:zip" element={<WeatherPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </Theme>
  );
}

export default App;