import axios from "axios";
import { useEffect, useState } from "react";

export default function Profil() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProfil = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profil");
        setData(response.data);
        console.log("Fetched Data Profile:", response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchProfil();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-6">
        {data.map((item, idx) => (
        <div key={idx} className={`p-6 ${item.bg} text-dark rounded text-center`}>
            <img src={`/images/profil/${item.img}`} alt={item.title} className="w-24 mx-auto mb-3" />
            <h5 className="font-bold text-[20px]">{item.title}</h5>
            <p>{item.desc}</p>
        </div>
        ))}
    </div>
  );
}
