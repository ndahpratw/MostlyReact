import axios from "axios";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Modal from "../homepage/ui/modal";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Pemesanan() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

    return (
        <main>
            {/* Modal */}
            <Modal show={modalLogin} setter={setModalLogin} modalName="Modal Login">
                <div className="form font-poppins">
                <h1 className="font-extrabold text-center mb-4 mt-2">
                    <span className="text-blue-500 text-[20px]">Mostly</span>
                    <span className="text-orange-500 text-[20px]">Web</span>
                </h1>

                <form action="" className="grid gap-4">
                    <p className="text-blue-500 font-semibold">
                    Silahkan Masukan Akun Anda
                    </p>
                    <div className="grid gap-4">
                    <div className="w-full">
                        <input type="email" className="w-full shadow-md py-2 px-2 rounded-lg" name="" id="" placeholder="Email"
                        />
                    </div>
                    <div className="w-full">
                        <input type="password" className="w-full shadow-md py-2 px-2 rounded-lg" name="" id="" placeholder="Password"
                        />
                    </div>
                    </div>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
                    Masuk
                    </button>
                    <p className="text-blue-500 font-semibold">Atau Masuk Dengan</p>
                    <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
                    <FcGoogle size={24} />
                    </button>
                    <p className="text-blue-500 mt-4 font-semibold">
                    Belum memiliki akun? Silahkan{" "}
                    <a onClick={() => { setModalLogin(false); setModalRegister(true); }} className="text-orange-500 hover:text-blue-500" href="#">
                        Daftar Akun
                    </a>
                    </p>
                </form>
                </div>
            </Modal>

            <Modal show={modalRegister} setter={setModalRegister} modalName="Modal Register">
                <div className="form font-poppins">
                <h1 className="font-extrabold text-center mb-4 mt-2">
                    <span className="text-blue-500 text-[20px]">Mostly</span>
                    <span className="text-orange-500 text-[20px]">Web</span>
                </h1>

                <form action="" className="grid gap-4">
                    <p className="text-blue-500 font-semibold">
                    Silahkan Daftarkan Akun Anda
                    </p>
                    <div className="grid gap-4">
                    <div className="w-full">
                        <input type="text" className="w-full shadow-md py-2 px-2 rounded-lg" name="" id="" placeholder="Nama"
                        />
                    </div>
                    <div className="w-full">
                        <input type="text" className="w-full shadow-md py-2 px-2 rounded-lg" name="" id="" placeholder="No HP"
                        />
                    </div>
                    <div className="w-full">
                        <input type="email" className="w-full shadow-md py-2 px-2 rounded-lg" name="" id="" placeholder="Email"
                        />
                    </div>
                    <div className="w-full">
                        <input type="password" className="w-full shadow-md py-2 px-2 rounded-lg" name="" id="" placeholder="Password"
                        />
                    </div>
                    </div>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
                    Daftar
                    </button>
                    <p className="text-blue-500 font-semibold">Atau Daftar Dengan</p>
                    <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
                    <FcGoogle size={24} />
                    </button>
                    <p className="text-blue-500 mt-4 font-semibold">
                    Sudah memiliki akun? Silahkan{" "}
                    <a
                        onClick={() => { setModalLogin(true); setModalRegister(false);
                        }}
                        className="text-orange-500 hover:text-blue-500"
                        href="#"
                    >
                        Masuk
                    </a>
                    </p>
                </form>
                </div>
            </Modal>

            <div className="bg-light-500 min-h-screen font-poppins">
    
            {/* Navbar */}
            <nav className="px-20 py-2 flex items-center justify-between">
                <div className="flex items-center">
                <img src="../../public/images/logo.png" alt="Logo" className="w-24" />
                </div>
    
                <ul className="flex space-x-10 font-bold text-blue-500">
                <li> <a href="#" className="text-blue-500"> Home </a></li>
                <li> <a href="#" className="text-blue-500"> Profil </a></li>
                <li> <a href="#" className="text-blue-500"> Layanan </a></li>
                <li> <a href="#" className="text-blue-500"> Produk </a></li>
                <li> <a href="#" className="text-blue-500"> Kontak </a></li>
                </ul>
    
                <div className="space-x-3">
                <button onClick={() => tampilkanModalLogin(setModalLogin)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-orange-500 font-bold">
                    Login
                </button>
                <button onClick={() => tampilkanModalLogin(setModalRegister)} className="px-4 py-2 border border-blue-500 bg-transparent text-blue-500 rounded-lg font-bold hover:bg-blue-500 hover:text-white">
                    Register
                </button>
                </div>
            </nav>

            {/* Produk */}
            <section id="produk" className="py-12 px-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                            <h2 className="font-bold text-center mb-6 text-3xl text-gray-800">Form Pemesanan</h2>
                            
                            <div className="bg-white shadow-lg border-0 rounded-2xl mb-6 overflow-hidden">
                                <div className="p-6">
                                    <h4 className="font-bold text-gray-600 mb-3 text-lg">Nama Paket</h4>
                                    <h3 className="text-gray-900 mb-4 text-2xl font-semibold">Rp 200.000</h3>
                                    <h5 className="font-semibold mb-3 text-gray-800">Benefit yang didapat:</h5>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <i className="bi bi-check-circle-fill text-green-500 mr-3 text-lg"></i>
                                            <span className="text-gray-700">Benefit 1</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-check-circle-fill text-green-500 mr-3 text-lg"></i>
                                            <span className="text-gray-700">Benefit 2</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-check-circle-fill text-green-500 mr-3 text-lg"></i>
                                            <span className="text-gray-700">Benefit 3</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-check-circle-fill text-green-500 mr-3 text-lg"></i>
                                            <span className="text-gray-700">Benefit 4</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-check-circle-fill text-green-500 mr-3 text-lg"></i>
                                            <span className="text-gray-700">Benefit 5</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white shadow-md border-0 rounded-2xl overflow-hidden">
                                <div className="p-6">
                                    <h5 className="font-bold mb-6 text-xl text-gray-800">Detail Pemesanan</h5>
                                    <form action="#" method="POST">
                                        <input type="hidden" name="subpaket_id" value="" />
                                        
                                        <div className="mb-6">
                                            <h5 className="font-bold mb-4 text-lg text-gray-800">Pilih Opsi Desain Website</h5>
                                            <div className="space-y-4">
                                                <div className="flex items-start">
                                                    <input className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" 
                                                        type="radio" 
                                                        name="opsiDesain" 
                                                        id="opsiProduk" 
                                                        value="produk" />
                                                    <label className="text-gray-700 cursor-pointer flex-1">
                                                        Menggunakan Desain Produk Katalog Tersedia
                                                    </label>
                                                </div>
                                                <div className="ml-7" id="design-option-container">
                                                    <div id="tambah-desain-btn" className="flex flex-wrap justify-center gap-3 mt-3">
                                                        <a href="/produk" className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200">
                                                            <i className="bi bi-plus-circle mr-2"></i> 
                                                            Tambah Desain Katalog
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-check">
                                            <input className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"  type="radio" name="opsiDesain" id="opsiCustom" value="custom"/>
                                            <label className="text-gray-700 cursor-pointer flex-1" >
                                                 Membawa Desain Sendiri
                                            </label>
                                            <div className="mt-2 ms-4 text-muted small">
                                                <div className="flex flex-wrap justify-center gap-3">
                                                    <a href="https://wa.me/6281234567890" target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"> WhatsApp </a>
                                                    <a href="mailto:emailanda@gmail.com" className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"> Gmail </a>
                                                    <a href="https://instagram.com/username" target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"> Instagram </a>
                                                </div>
                                            </div>
                                        </div>

                                        <input type="hidden" name="produk_id" id="produk-id-input" value="" />

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Nama Domain Web</label>
                                            <div className="grid grid-cols-12 gap-3">
                                                <div className="col-span-10">
                                                    <input type="text" 
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                                        name="nama_domain" 
                                                        id="domain"
                                                        placeholder="nama domain anda" 
                                                        required 
                                                        pattern="^[a-z0-9]+(-[a-z0-9]+)*$"
                                                        title="Gunakan huruf kecil, angka, dan tanda minus (-) tanpa spasi" />
                                                </div>
                                                <div className="col-span-2">
                                                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                                            name="ekstensi_domain" 
                                                            id="ekstensi-domain"
                                                            required>
                                                        <option value=".com">.com</option>
                                                        <option value=".id">.id</option>
                                                        <option value=".co.id">.co.id</option>
                                                        <option value=".net">.net</option>
                                                        <option value=".org">.org</option>
                                                        <option value=".info">.info</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Catatan Tambahan</label>
                                            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                                    id="catatan" 
                                                    name="catatan" 
                                                    placeholder="Tuliskan catatan jika ada"></textarea>
                                        </div>

                                        <div className="text-center space-x-3">
                                            <button type="submit" 
                                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                                Lanjutkan Pemesanan
                                            </button>
                                            <a href="/" 
                                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 inline-block">
                                                Kembali
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-oraneg-500 text-dark">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
                <div className="mb-4 md:mb-0">
                    <img src="/images/logo.png" alt="Logo" className="h-12 mx-auto md:mx-0" />
                </div>
    
                <div className="flex space-x-5 text-xl">
                    <a href="https://wa.me/62XXXXXXXXXX" target="_blank" className="hover:text-green-500 transition">
                    <FaWhatsapp />
                    </a>
                    <a href="mailto:yourmail@gmail.com" className="hover:text-red-500 transition">
                    <FaEnvelope />
                    </a>
                    <a href="https://instagram.com/yourusername" target="_blank" className="hover:text-pink-500 transition">
                    <FaInstagram />
                    </a>
                    <a href="https://tiktok.com/@yourusername" target="_blank" className="hover:text-black transition">
                    <FaTiktok />
                    </a>
                    <a href="https://youtube.com/yourchannel" target="_blank" className="hover:text-red-600 transition">
                    <FaYoutube />
                    </a>
                </div>
                </div>
    
                <div className="border-t border-gray-400 py-3 text-center text-sm text-dark">
                &copy; 2025 <span className="font-semibold">MostlyWeb</span>. All rights reserved.
                </div>
            </footer>
        </div>
    </main>
    );
} 