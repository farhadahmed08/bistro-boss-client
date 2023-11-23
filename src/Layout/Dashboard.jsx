import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import UseAdmin from "../hooks/UseAdmin";

const Dashboard = () => {


  const [cart] = useCart();

  //TODO: get isAdmin value from the database
  const [isAdmin] =UseAdmin();




  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils>
              Add items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook/>
              Manage Bookings
            </NavLink>
            <NavLink to="/dashboard/users">
              <FaUsers/>
              All Users
            </NavLink>
          </li>
            </>
            :
            <>
            <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart:({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd/>My a Review
            </NavLink>
            <NavLink to="/dashboard/bookings">
              <FaList/>My Bookings 
            </NavLink>
          </li>
            </>
          }
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope/>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
