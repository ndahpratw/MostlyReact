"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimoni() {

  const [dataTestimoni, setDataTestimoni] = useState<any>([]);

  useEffect(() => {

    const fetchTestimoni = async () => {
      try {
        const response = await axios.get("http://localhost:3000/testimoni");
        setDataTestimoni(response.data);
      } catch (error) {
        console.log("Error fetching Testimoni:", error);
      }
    }
    fetchTestimoni();
  }, []);

  return (
    <>
        <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-10"
        >
          {dataTestimoni.map((item) => (
            <SwiperSlide key={item.id} className="!w-[280px] md:!w-[320px]">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <img src={item.gambar} alt={item.nama} className="w-12 h-12 rounded-full mr-3 object-cover" />
                  <h6 className="font-semibold">{item.nama}</h6>
                </div>

                <div className="mb-3 text-yellow-500 text-lg">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <p className="italic text-gray-700 mb-6">"{item.ulasan}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
