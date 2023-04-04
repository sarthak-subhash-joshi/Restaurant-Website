import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomeUser from "./pages/user/Home";
import HomeOwner from "./pages/restaurant_owner/Home";
import Menu from "./pages/user/Menu";
import Gallery from "./pages/user/Gallery/Gallery";
import DetailsOfItem from "./pages/user/Item/DetailsOfItem";
import Login from "./pages/user/Login/Login";
import Register from "./pages/user/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* user side routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/user" element={<HomeUser />} /> */}
          <Route path="/userMenu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/userMenu/menu/:id" element={<DetailsOfItem />} />

          {/* owner side routes */}
          <Route path="/owner" element={<HomeOwner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
