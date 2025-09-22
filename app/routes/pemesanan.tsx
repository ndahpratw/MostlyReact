import Pemesanan from "../components/pages/pemesanan/pemesanan";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Pemesanan" },
        { name: "Pemesanan Page", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <Pemesanan />;
}