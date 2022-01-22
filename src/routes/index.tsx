import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SearchPage /> } />
      </Routes>
    </BrowserRouter>
  );
};
