
// import { FcGoogle } from "react-icons/fc";
// const tampilkanModalLogin = (setModalLogin: any) => {
//   setModalLogin(true);
// };

//   const [modalLogin, setModalLogin] = useState(false);
//   const [modalRegister, setModalRegister] = useState(false);

// export default function RegisterForm() {
//     return (
//         <div className="form font-poppins">
//             <h1 className="font-extrabold text-center mb-4 mt-2">
//             <span className="text-blue-500 text-[20px]">Mostly</span>
//             <span className="text-orange-500 text-[20px]">Web</span>
//             </h1>

//             <form action="" className="grid gap-4">
//             <p className="text-blue-500 font-semibold">
//                 Silahkan Daftarkan Akun Anda
//             </p>
//             <div className="grid gap-4">
//                 <div className="w-full">
//                 <input
//                     type="text"
//                     className="w-full shadow-md py-2 px-2 rounded-lg"
//                     name=""
//                     id=""
//                     placeholder="Nama"
//                 />
//                 </div>
//                 <div className="w-full">
//                 <input
//                     type="text"
//                     className="w-full shadow-md py-2 px-2 rounded-lg"
//                     name=""
//                     id=""
//                     placeholder="No HP"
//                 />
//                 </div>
//                 <div className="w-full">
//                 <input
//                     type="email"
//                     className="w-full shadow-md py-2 px-2 rounded-lg"
//                     name=""
//                     id=""
//                     placeholder="Email"
//                 />
//                 </div>
//                 <div className="w-full">
//                 <input
//                     type="password"
//                     className="w-full shadow-md py-2 px-2 rounded-lg"
//                     name=""
//                     id=""
//                     placeholder="Password"
//                 />
//                 </div>
//             </div>
//             <button className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black">
//                 Daftar
//             </button>
//             <p className="text-blue-500 font-semibold">Atau Daftar Dengan</p>
//             <button className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2">
//                 <FcGoogle size={24} />
//             </button>
//             <p className="text-blue-500 mt-4 font-semibold">
//                 Sudah memiliki akun? Silahkan{" "}
//                 <a
//                 onClick={() => {
//                     setModalLogin(true);
//                     setModalRegister(false);
//                 }}
//                 className="text-orange-500 hover:text-blue-500"
//                 href="#"
//                 >
//                 Masuk
//                 </a>
//             </p>
//             </form>
//         </div>
//     );
// }