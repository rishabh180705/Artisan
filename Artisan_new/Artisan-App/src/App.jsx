import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LoginScreen from './Login/Login';
import Add from './AddProduct/Add';
import Home from "./SellerHome/home";
import Landing from "./OptionScreen/LandingScreen";
import ChooseRole from "./ChooseRole/Role";
import DopLogin from "./DopLogin/DopLogin";
import Order from "./Order/Order"
import ProfilePage from "./Profile/Profile";
import DopHome from "./DopHome/Home";
import AllOrders from "./AllOrders/AllOrder";
import ArtisanDetails from "./ArtisanDetails/ArtisanDetails";
import AddProductById from "./AddProductDop/Add";
import Dashboard from "./DashBoard/DashBoard";
import ArtisanList from "./ArtisanList/ArtisanList";
import ArtisanHelpdesk from "./HelpDesk/HelpDesk";
import { FirstPage } from "@mui/icons-material";
import FirstOrderPage from "./FirstOrder/FirstOrder";
import ArtisanProductListing from "./ArtisanProductList";
// import ArtisanList from "./ArtisanList/ArtisanList";
// import ArtisanProductList from "./ArtisanList/ArtisanList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Artisan-Login"element={<LoginScreen />} />
        <Route path="/add" element={<Add />} />
        <Route path="/Artisan-Home" element={<Home />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/Dop-Login" element={<DopLogin/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/List-product" element={<ArtisanProductListing/>}/>
        <Route path="/Dop-home" element={<DopHome/>}/>
        <Route path="/all-orders" element={<AllOrders/>}/>
        <Route path="/artisan/:pahchanId" element={<ArtisanDetails />} />
        <Route path="/add-product" element={<AddProductById/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/all-artisans" element={<ArtisanList/>} />
        <Route path="/help-desk" element={<ArtisanHelpdesk/>} />
        <Route path="/artisan-first-product" element={<FirstOrderPage/>} />
      </Routes>
    </Router>
  );
}

export default App;


