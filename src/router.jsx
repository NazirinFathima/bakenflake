import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import PlpPage from "./pages/plppage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plp" element={<PlpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
