import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, HomePage } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/sobre" element={ <AboutPage /> } />
        <Route path="/contato" element={ <ContactPage /> } />
      </Routes>
    </BrowserRouter>
  );
};
