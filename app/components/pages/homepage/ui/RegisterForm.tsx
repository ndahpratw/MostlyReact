import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm({
  setModalLogin,
  setModalRegister,
}: {
  setModalLogin: any;
  setModalRegister: any;
}) {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState<string | null>(null);

  // === VALIDASI FRONTEND ===
  const validate = () => {
    const { name, phone, email, password, password_confirmation } = registerForm;

    if (!name || !phone || !email || !password || !password_confirmation) {
      return "Semua field wajib diisi.";
    }
    if (!/^[0-9]{10,15}$/.test(phone)) {
      return "Nomor HP harus angka dan minimal 10 digit.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Format email tidak valid.";
    }
    if (password.length < 8) {
      return "Password minimal 8 karakter.";
    }
    if (password !== password_confirmation) {
      return "Konfirmasi password tidak sama.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setErrors(validationError);
      toast.error(validationError);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        registerForm
      );
      console.log(response.data);
      toast.success("Registrasi berhasil!");
      setErrors(null);
    } catch (error: any) {
      console.error("There was an error!", error.response?.data?.errors);
      if (error.response?.data?.errors) {
        const serverError = Object.values(error.response.data.errors)
          .flat()
          .join(", ");
        setErrors(serverError);
        toast.error("Terjadi kesalahan server");
      }
    }
  };

  return (
    <div className="form font-poppins">
      <h1 className="font-extrabold text-center mb-4 mt-2">
        <span className="text-blue-500 text-[20px]">Mostly</span>
        <span className="text-orange-500 text-[20px]">Web</span>
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {errors && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {errors}</span>
          </div>
        )}

        <p className="text-blue-500 font-semibold">
          Silahkan Daftarkan Akun Anda
        </p>

        {/* Input Fields */}
        {["name", "phone", "email", "password", "password_confirmation"].map(
          (field) => (
            <input
              key={field}
              type={
                field.includes("password")
                  ? "password"
                  : field === "email"
                  ? "email"
                  : "text"
              }
              className="w-full shadow-md py-2 px-2 rounded-lg"
              placeholder={
                field === "name"
                  ? "Nama"
                  : field === "phone"
                  ? "No HP"
                  : field === "email"
                  ? "Email"
                  : field === "password"
                  ? "Password"
                  : "Konfirmasi Password"
              }
              value={(registerForm as any)[field]}
              onChange={(e) =>
                setRegisterForm((prev) => ({ ...prev, [field]: e.target.value }))
              }
            />
          )
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-lg mt-4 mb-4 hover:bg-orange-500 hover:text-black"
        >
          Daftar
        </button>

        <p className="text-blue-500 font-semibold">Atau Daftar Dengan</p>
        <button
          type="button"
          className="w-full shadow-md text-white mx-auto rounded-md flex justify-center items-center py-2"
        >
          <FcGoogle size={24} />
        </button>

        <p className="text-blue-500 mt-4 font-semibold">
          Sudah memiliki akun? Silahkan{" "}
          <a
            onClick={() => {
              setModalLogin(true);
              setModalRegister(false);
            }}
            className="text-orange-500 hover:text-blue-500 cursor-pointer"
          >
            Masuk
          </a>
        </p>
      </form>
    </div>
  );
}
