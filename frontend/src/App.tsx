import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import NavbarHandle from "./components/Navbar/NavbarHandle";
import Booking from "./pages/booking/Booking";
import Payment from "./pages/payment/Payment";
import Ticket from "./pages/ticket/Ticket";
import ReviewMovie from "./pages/review/ReviewMovie";
import CustomerSupport from "./pages/support/CustomerSupport";
import ShareMovie from "./pages/share/ShareMovie";
import Watchlist from "./pages/watchlist/Watchlist";

function App() {
  return (
    <>
      <Router>
        <NavbarHandle>
          <Navbar />
        </NavbarHandle>
        <Routes>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Tickets" element={<Ticket />} />
          <Route path="/Review" element={<ReviewMovie />} />
          <Route path="/Support" element={<CustomerSupport />} />
          <Route path="/Share" element={<ShareMovie />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
