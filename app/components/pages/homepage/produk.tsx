import axios from "axios";
import { useEffect, useState } from "react";

export default function Produk() {
  const [kategori, setKategori] = useState<any>([]);
  const [produk, setProduk] = useState<any>([]);
  const [activeKategori, setActiveKategori] = useState(1);
  const filteredProduk = produk.filter(
    (item) => item.kategori_id === activeKategori
  );

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
    <>    
        <div className="flex justify-center flex-wrap gap-6 mb-10 mt-10">
          {kategori.map((item) => (
            <div key={item.id} onClick={() => setActiveKategori(item.id)} className={`w-[70px] h-[200px] border-2 border-gray-300 flex items-center justify-center cursor-pointer font-semibold transition-all writing-mode-vertical-rl rotate-180 ${
                activeKategori === item.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ writingMode: "vertical-rl" }}>
              {item.nama_kategori}
            </div>
          ))}
          <a href="/produk" className="w-[70px] h-[200px] flex items-center justify-center font-semibold bg-blue-500 text-white text-center cursor-pointer transition-all rotate-180" style={{ writingMode: "vertical-rl" }}>
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
    </>
  );
}
