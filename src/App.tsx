import "./Adaptive.css";
import Body from "./components/Body";
import CarParts from "./components/CarParts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Accumulator from "./pages/accumulator/Accumulator";
import OriginalParts from "./pages/originalParts/OriginalParts";
import OrderPlacement from "./pages/orderplacement/OrderPlacement";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Body />
            <CarParts />
            <Footer />
          </div>
        }
      />
      <Route
        path="/accumulator"
        element={
          <div>
            <Header />
            <Accumulator />
            <Footer />
          </div>
        }
      />
      <Route
        path="/originalparts"
        element={
          <div>
            <Header />
            <OriginalParts />
            <Footer />
          </div>
        }
      />
      <Route
        path="/order"
        element={
          <div>
            <Header />
            <OrderPlacement />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
