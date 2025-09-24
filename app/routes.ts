import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("produk", "routes/produk.tsx"),
    route("profile", "routes/profile.tsx"),
    route("riwayat", "routes/riwayat.tsx"),
    route("pemesanan", "routes/pemesanan.tsx"),
] satisfies RouteConfig;
