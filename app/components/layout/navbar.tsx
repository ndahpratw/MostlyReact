import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import LoginForm from "../pages/homepage/ui/LoginForm";
import RegisterForm from "../pages/homepage/ui/RegisterForm";
import Modal from "../pages/homepage/ui/modal";

// Custom hook untuk localStorage yang aman
function useSafeLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    } finally {
      setIsLoading(false);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, isLoading] as const;
}

export default function Navbar({
  modalLogin,
  setModalLogin,
  modalRegister,
  setModalRegister,
}: {
  modalLogin: boolean;
  setModalLogin: (val: boolean) => void;
  modalRegister: boolean;
  setModalRegister: (val: boolean) => void;
}) {
    
  const [accessToken, setAccessToken, isLoading] = useSafeLocalStorage<string | null>("accessToken", null);

  const showLoginModal = () => {
    setModalLogin(true);
  };

  const showRegisterModal = () => {
    setModalRegister(true);
  };

   const checkUser = async () => {
    if (!accessToken) {
      toast.error("You need to login first");
      return;
    }

    try {
      const response = await axios.get("http://127.0.0.1:8000/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("User data:", response.data);
      toast.success("User data fetched successfully");
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to fetch user data");
    }
  }

  const handleLogout = async () => {
    setAccessToken(null);
    toast.success("Logged out successfully");
  }

  // Render loading state jika masih mengecek localStorage
  if (isLoading) {
    return (
      <nav className="px-20 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="w-24" />
        </div>
        <ul className="flex space-x-10 font-bold text-blue-500">
          <li><a href="#" className="text-blue-500">Home</a></li>
          <li><a href="#" className="text-blue-500">Profil</a></li>
          <li><a href="#" className="text-blue-500">Layanan</a></li>
          <li><a href="#" className="text-blue-500">Produk</a></li>
          <li><a href="#" className="text-blue-500">Kontak</a></li>
        </ul>
        <div className="space-x-3">
          <div className="px-4 py-2 bg-gray-200 rounded-lg animate-pulse">Loading...</div>
        </div>
      </nav>
    );
  }

  return <>
    
    <Modal show={modalLogin} setter={setModalLogin} modalName="Modal Login">
      <LoginForm setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
    </Modal>

    <Modal show={modalRegister} setter={setModalRegister} modalName="Modal Register">
      <RegisterForm setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
    </Modal>

    <nav className="px-20 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="w-24" />
      </div>

      <ul className="flex space-x-10 font-bold text-blue-500">
        <li>
          <a href="#" className="text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Profil
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Layanan
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Produk
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500">
            Kontak
          </a>
        </li>
      </ul>

      <div className="space-x-3">
        {accessToken ? (
          <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-500 font-bold">
            Logout
          </button>
        ) : (
          <>
            <button onClick={showLoginModal} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-500 font-bold">
              Login
            </button>
            <button onClick={showRegisterModal} className="px-4 py-2 border border-blue-500 bg-transparent text-blue-500 rounded-lg font-bold hover:bg-blue-500 hover:text-white">
              Register
            </button>
          </>
        )}
        <button onClick={checkUser} className="px-4 py-2 border border-blue-500 bg-transparent text-blue-500 rounded-lg font-bold hover:bg-blue-500 hover:text-white">
          Cek User
        </button>
      </div>
    </nav>
  </>;
}