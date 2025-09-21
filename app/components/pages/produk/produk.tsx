
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Modal from "../../../components/pages/homepage/ui/modal";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const kategoriList = [
  { id: 1, nama_kategori: "Teknologi Digital" },
  { id: 2, nama_kategori: "Otomotif" },
  { id: 3, nama_kategori: "Lifestyle" },
  { id: 4, nama_kategori: "Kesehatan" },
  { id: 5, nama_kategori: "Pendidikan" },
  { id: 6, nama_kategori: "Makanan & Minuman" },
  { id: 7, nama_kategori: "Olahraga" },
  { id: 8, nama_kategori: "Properti" },
  { id: 9, nama_kategori: "Profil & Portofolio" },
  { id: 10, nama_kategori: "Media Publikasi" },
  { id: 11, nama_kategori: "Traveling" },
];

const produkList = [
  {
    id: 1,
    kategori_id: 1,
    nama_produk: "Digital Store Website",
    gambar_produk: "sampul_digital.png",
  },
  {
    id: 2,
    kategori_id: 4,
    nama_produk: "Skincare Beauty Website",
    gambar_produk: "sampul_bakery.png",
  },
  {
    id: 3,
    kategori_id: 2,
    nama_produk: "Automotive Website",
    gambar_produk: "sampul_digital.png",
  },
  {
    id: 4,
    kategori_id: 1,
    nama_produk: "Digital Store 2 Website",
    gambar_produk: "sampul_digital.png",
  },
];

export default function Produk() {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [activeKategori, setActiveKategori] = useState(1);
    
    const filteredProduk = produkList.filter(
        (item) => item.kategori_id === activeKategori
    );
      
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
                    <div className="flex justify-center flex-wrap gap-6 mb-10 mt-10">
                    {kategoriList.map((item) => (
                        <div key={item.id} onClick={() => setActiveKategori(item.id)} className={`w-[70px] h-[200px] border-2 border-gray-300 flex items-center justify-center cursor-pointer font-semibold transition-all writing-mode-vertical-rl rotate-180 ${
                            activeKategori === item.id
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        style={{ writingMode: "vertical-rl" }}>
                        {item.nama_kategori}
                        </div>
                    ))}
                    <a href="/desain-produk" className="w-[70px] h-[200px] flex items-center justify-center font-semibold bg-blue-500 text-white text-center cursor-pointer transition-all rotate-180" style={{ writingMode: "vertical-rl" }}>
                        Selengkapnya
                    </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
                    {filteredProduk.length > 0 ? (
                        filteredProduk.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden mt-7">
                            <img src={`public/images/produk/${item.gambar_produk}`} alt={item.nama_produk} className="w-full object-cover" />
                            <div className="p-4">
                            <h5 className="font-semibold text-lg">{item.nama_produk}</h5>
                            <a href={`/preview/${item.id}`} className="inline-block mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                                Preview
                            </a>
                            </div>
                        </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">
                        Belum ada produk pada kategori ini.
                        </p>
                    )}
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