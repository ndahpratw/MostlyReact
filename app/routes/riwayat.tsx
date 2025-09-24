import type { Route } from "./+types/home";
import RiwayatPesanan from "../components/pages/customer/riwayat-pesanan";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <RiwayatPesanan />;
}
