import axios from "axios";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Modal from "../homepage/ui/modal";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Produk() {
  const [kategori, setKategori] = useState<any>([]);
  const [activeKategori, setActiveKategori] = useState(1);
  const [produk, setProduk] = useState<any>([]);
  const filteredProduk = produk.filter(
    (item) => item.kategori_id === activeKategori
  );
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);


  useEffect(() => {

    const fetchKategori = async () => {
      try {
        const response = await axios.get("http://localhost:3000/kategori");
        setKategori(response.data);
      } catch (error) {
        console.log("Error fetching Kategori:", error);
      }
    }
    fetchKategori();

    const fetchProduk = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/produk");
        setProduk(response.data);
        console.log("Fetched Data:", response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchProduk();
  }, []);

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
                <div className="container grid grid-cols-12 gap-6 mx-auto px-4">

                    <div className="bg-white shadow-md col-span-3 mb-10 mt-10 p-6">
                        <h5 className="font-bold mb-3">Filter Kategori</h5>
                        {kategori.map((item) => (
                            <div className="form-check mb-2" key={item.id}>
                                <input
                                    className="form-check-input filter-checkbox"
                                    type="radio"
                                    name="kategori"
                                    id={`kategori${item.id}`}
                                    checked={activeKategori === item.id}
                                    onChange={() => setActiveKategori(item.id)}
                                />
                                <label className="form-check-label" htmlFor={`kategori${item.id}`}> {item.nama_kategori} </label>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-9">
                        <div className="grid grid-cols-12 gap-4">
                            {produk.filter(item => Number(item.kategori_id) === activeKategori).map((item) => (
                                <div className="col-span-6" key={item.id}>
                                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                        <img src={`/images/produk/${item.gambar_produk}`} alt={item.nama_produk} className="w-full object-cover" />
                                        <div className="p-4">
                                            <h5 className="font-semibold text-lg">{item.nama_produk}</h5>
                                            <div className="flex flex-wrap gap-3">
                                                <a href="#" className="inline-block mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                                                    Preview
                                                </a>
                                                <a href="#" className="inline-block mt-3 px-4 py-2 text-sm bg-orange-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                                                    Gunakan desain
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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