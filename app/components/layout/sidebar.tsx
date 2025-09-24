import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

export default function Sidebar() {

    return (        <div id="sidebar" className="fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform -translate-x-full transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0">
            <div className="flex items-center p-6 border-b border-gray-200">
                <img src="images/logo.png" alt="MostlyWeb" className="h-8" />
                <h1 className="text-xl font-bold text-gray-900 mx-3">MostlyWeb</h1>
                <button id="closeSidebar" className="lg:hidden p-2 rounded-md hover:bg-gray-100">
                    <i data-lucide="x" className="h-5 w-5"></i>
                </button>
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li>
                        <a href="/profile" className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left bg-blue-50 text-blue-700 border border-blue-200">
                            <CgProfile />
                            <span className="font-medium">Profil Saya</span>
                        </a>
                    </li>
                    <li>
                        <a href="/riwayat" className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors">
                            <FaShoppingCart />
                            <span className="font-medium">Riwayat Pesanan</span>
                        </a>
                    </li>
                    <li>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors">
                            <MdLogout />
                            <span className="font-medium">Logout</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}