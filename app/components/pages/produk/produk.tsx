import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import { useSearchParams } from "react-router";

export default function Produk() {
const[searchParams, setSearchParams] = useSearchParams();
  const [kategori, setKategori] = useState<any>([]);
  const [produk, setProduk] = useState<any>([]);
  const filteredProduk = searchParams.getAll("filter").length > 0 ? produk.filter((item:any) => searchParams.getAll("filter").includes(String(item.kategori_id))) : produk;
  
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

  const handleFilterChange = (id: number) => {
    // note : filter dan search tu ntar nampil di urlnya, jadi bebas diganti
    let ids = searchParams.getAll("filter");
    const search = searchParams.get("search") || "";

    if (ids.includes(id.toString())) {
      ids = ids.filter((item) => item !== id.toString());
    } else {
      ids.push(id.toString());
    }
    setSearchParams({
          search:search || "",
          filter:ids
      });
  }


    return (
        <main>
            <div className="bg-light-500 min-h-screen font-poppins">
                {/* Navbar */}
                <Navbar modalLogin={modalLogin} setModalLogin={setModalLogin} modalRegister={modalRegister} setModalRegister={setModalRegister}/>
                

                {/* Produk */}
                <section id="produk" className="py-12 px-12 bg-white">
                    <div className="container grid grid-cols-12 gap-6 mx-auto px-4">

                        <div className="bg-white shadow-md col-span-3 mb-10 mt-10 p-6">
                            <h5 className="font-bold mb-3">Filter Kategori</h5>
                            {kategori.map((item:any) => (
                                <div className="form-check mb-2" key={item.id}>
                                    <input type="checkbox" name="kategori" id={`kategori${item.id}`}
                                        checked={searchParams.getAll("filter").includes(String(item.id))}
                                        onChange={() => handleFilterChange(Number(item.id))}
                                    />
                                    <label className="form-check-label" htmlFor={`kategori${item.id}`}> {item.nama_kategori} </label>
                                </div>
                            ))}
                        </div>

                        <div className="col-span-9">
                            <div className="grid grid-cols-12 gap-4">
                                {filteredProduk.map((item:any) => (
                                    <div className="col-span-6" key={item.id}>
                                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                            <img src={`/images/produk/${item.gambar_produk}`} alt={item.nama_produk} className="w-full object-cover" />
                                            <div className="p-4">
                                                <h5 className="font-semibold text-lg">{item.nama_produk}</h5>
                                                <div className="flex flex-wrap gap-3">
                                                    <a href="" className="inline-block mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
                                                        Preview
                                                    </a>
                                                    <a href="" className="inline-block mt-3 px-4 py-2 text-sm bg-orange-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
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
                <Footer/>
            </div>
        </main>
    );
} 