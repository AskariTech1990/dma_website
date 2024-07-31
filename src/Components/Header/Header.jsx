import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import LogoRental from "../../assets/Images/LogoRental.png";
import DefaultProfileImage from "../../assets/Images/DefaultProfileImage.jpg"; // Import the default image
import { TiShoppingCart } from "react-icons/ti";
import Modal from "../Modal/Modal";
import ApiUrl from "../../Common/ApiUrl";
import { selectCartItemCount } from "../../Slice/Cart/CartSlice";
import axios from "axios";
import { GoHeartFill } from "react-icons/go";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", profilePicture: "" });
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false); // State for products dropdown
  const cartItemCount = useSelector(selectCartItemCount);
  const navigate = useNavigate();
  const location = useLocation(); // Get current path
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`${ApiUrl}/api/inventory/get-inventory`);
        const resData = res.data;
        setProducts(resData);
        console.log("These are my products", resData);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const profilePicture = localStorage.getItem("profilePicture");
    if (token) {
      setUser({ name, profilePicture });
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("this is products", filtered);
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const switchToSignUp = () => {
    setModalType("signup");
  };

  const handleCartClick = () => {
    navigate("/add-to-cart");
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    dispatch(logout());
  };

  const handleSignInSuccess = (user) => {
    setUser(user);
    setIsLoggedIn(true);
    closeModal();
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleImageError = (e) => {
    e.target.src = DefaultProfileImage;
  };

  const getButtonClass = (path) => {
    return location.pathname === path
      ? "bg-yellow-500 text-white px-5 py-2 rounded-full"
      : "text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full";
  };

  const handleProductClick = (path) => {
    navigate(path);
    setIsProductsDropdownOpen(false); // Close the dropdown
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsProductsDropdownOpen(false); // Close the dropdown
  };


  return (
    <div className="flex items-center w-full justify-between p-4 bg-white shadow-md">
      <img
        src={LogoRental}
        alt="Logo Rental"
        className="h-10 md:h-8 cursor-pointer"
        onClick={handleHome}
      />
      <div className="hidden md:flex lg:gap-5 md:gap-2">
        <button
          className={getButtonClass("/")}
          onClick={() => handleNavigation("/")}
        >
          Home
        </button>
        <button
          className={getButtonClass("/about-us")}
          onClick={() => handleNavigation("/about-us")}
        >
          About Us
        </button>
        <div className="relative">
          <button
            className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
            onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
          >
            Products
          </button>
          {isProductsDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 h-92 bg-white shadow-lg rounded-lg p-2 z-10 flex flex-col gap-1">
              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() => handleProductClick("/products/h-frames")}
              >
                H Frames
              </button>
              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() =>
                  handleProductClick("/products/intermediate-frames")
                }
              >
                Transportation
              </button>

              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() => handleProductClick("/products/pans-beams")}
              >
                Cup Locks
              </button>
              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() => handleProductClick("/products/ladders")}
              >
                Heavy Equipment
              </button>
              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() => handleProductClick("/products/jacks-props")}
              >
                Accro Props
              </button>
              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() => handleProductClick("/products/tubes")}
              >
                Tubes & Clamps
              </button>
              <button
                className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                onClick={() => handleProductClick("/products/tools")}
              >
                Tools
              </button>
            </div>
          )}
        </div>
        <button
          className={getButtonClass("/services")}
          onClick={() => handleNavigation("/services")}
        >
          Services
        </button>
        <button
          className={getButtonClass("/gallery")}
          onClick={() => handleNavigation("/gallery")}
        >
          Gallery
        </button>
        <button
          className={getButtonClass("/contact")}
          onClick={() => handleNavigation("/contact")}
        >
          Contact Us
        </button>
        <button
          className={getButtonClass("/orderHistory")}
          onClick={() => handleNavigation("/orderHistory")}
        >
          Order History
        </button>
      </div>

      <div className="hidden md:flex space-x-4 items-center">
        <div className="relative">
          <TiShoppingCart
            className="text-3xl cursor-pointer"
            onClick={handleCartClick}
          />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cartItemCount}
            </span>
          )}
        </div>
        {isLoggedIn ? (
          <div className="relative flex items-center space-x-2">
            <img
              src={`${ApiUrl}${user.profilePicture}`}
              alt="Profile"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              onError={handleImageError} // Add onError event
            />
            <span className="font-bold">{user.name}</span>
            {isSidebarOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 text-left text-black hover:bg-customColor-circleColor rounded"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={() => openModal("signin")}
              className={`px-4 py-2 rounded ${modalType === "signin"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black hover:bg-gray-200"
                }`}
            >
              Sign In
            </button>
            <button
              onClick={() => openModal("signup")}
              className={`px-4 py-2 rounded ${modalType === "signup"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black hover:bg-gray-200"
                }`}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-blue-500"
        >
          &#9776;
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-end bg-gray-800 bg-opacity-75">
          <div className="w-64 bg-white h-full shadow-lg p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="mb-4 text-gray-500"
            >
              &#10005;
            </button>
            {isLoggedIn && (
              <div className="relative flex items-center space-x-2 mb-4">
                <img
                  src={`${ApiUrl}${user.profilePicture}`}
                  alt="Profile"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  onError={handleImageError} // Add onError event
                />
                <span className="font-bold">{user.name}</span>
              </div>
            )}
            <div className="flex flex-col gap-5">
              <button
                className={getButtonClass("/")}
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <button
                className={getButtonClass("/about-us")}
                onClick={() => navigate("/about-us")}
              >
                About Us
              </button>
              <div className="relative">
                <div className="flex justify-center">
                  <button
                    className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                    onClick={() =>
                      setIsProductsDropdownOpen(!isProductsDropdownOpen)
                    }
                  >
                    Products
                  </button>
                </div>
                {isProductsDropdownOpen && (
                  <div className="flex flex-col mt-2 bg-white shadow-lg rounded-lg">
                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() => handleProductClick("/products/h-frames")}
                    >
                      H Frames
                    </button>
                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() =>
                        handleProductClick("/products/intermediate-frames")
                      }
                    >
                      Transportation
                    </button>

                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() => handleProductClick("/products/pans-beams")}
                    >
                      Cup Locks
                    </button>
                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() => handleProductClick("/products/ladders")}
                    >
                      Heavy Equipment
                    </button>
                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() =>
                        handleProductClick("/products/jacks-props")
                      }
                    >
                      Accro Props
                    </button>
                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() => handleProductClick("/products/tubes")}
                    >
                      Tubes & Clamps
                    </button>
                    <button
                      className="text-gray-900 font-bold hover:bg-gray-200 px-5 py-2 rounded-full"
                      onClick={() => handleProductClick("/products/tools")}
                    >
                      Tools
                    </button>
                  </div>
                )}
              </div>
              <button
                className={getButtonClass("/services")}
                onClick={() => navigate("/services")}
              >
                Services
              </button>
              <button
                className={getButtonClass("/gallery")}
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </button>
              <button
                className={getButtonClass("/contact")}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
              <button
                className={getButtonClass("/orderHistory")}
                onClick={() => handleNavigation("/orderHistory")}
              >
                Order History
              </button>
            </div>
            {isLoggedIn ? (
              <>
                <div className="relative mb-4 md:hidden">
                  <TiShoppingCart
                    className="text-3xl cursor-pointer"
                    onClick={handleCartClick}
                  />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 mb-2 border border-gray-800 hover:border-white text-black hover:text-white font-normal hover:bg-customColor-circleColor rounded-3xl text-center"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => openModal("signin")}
                  className={`w-full mb-2 px-4 py-2 rounded ${modalType === "signin"
                      ? "bg-yellow-500 text-white"
                      : "bg-white text-black hover:bg-gray-200"
                    }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => openModal("signup")}
                  className={`w-full px-4 py-2 rounded ${modalType === "signup"
                      ? "bg-yellow-500 text-white"
                      : "bg-white text-black hover:bg-gray-200"
                    }`}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalType={modalType}
        switchToSignUp={switchToSignUp}
        onSignInSuccess={handleSignInSuccess}
      />
    </div>
  );
};

export default Header;
