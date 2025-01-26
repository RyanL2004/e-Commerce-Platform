import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaUser, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function UserDropDown({ logoutHandler }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch user's name from Redux state
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer; // Contains user details like name and email
  const userName = userInfo?.name || "Guest"; // Fallback to "Guest" if userInfo is null

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-md shadow-md"
        onClick={toggleDropdown}
      >
        <FaUser className="text-lg" />
        <span className="font-medium">{userName}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-2">
            <li>
              <Link
                to="/profile"
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
              >
                <FaUser />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/orderhistory"
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
              >
                <FaBox />
                <span>My Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
              >
                <FaCog />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <button
                onClick={logoutHandler}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-100 w-full text-left"
              >
                <FaSignOutAlt />
                <span>Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
