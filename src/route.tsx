import { Route, Routes } from "react-router-dom";
import { CarDetails, Home, Payment } from "./pages";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car-details/:id" element={<CarDetails />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};
