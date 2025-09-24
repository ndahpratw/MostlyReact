import Sidebar from "../../layout/sidebar";

export default function RiwayatPesanan() {

    return (
        <div className="flex h-screen">
            <div id="overlay" className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden hidden"></div>
            
            {/* <!-- Sidebar --> */}
            <Sidebar/>
            
            {/* <!-- Main Content --> */}
            <div className="flex-1 flex flex-col overflow-hidden">

                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button id="openSidebar" className="lg:hidden p-2 rounded-md hover:bg-gray-100">
                            <i data-lucide="menu" className="h-6 w-6 text-gray-600"></i>
                        </button>
                        
                        <div className="flex items-center space-x-4">
                            <h2 className="text-xl font-semibold text-gray-900">Riwayat Pemesanan</h2>
                        </div>
                    </div>
                </header>
                
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                        
                        <div className="my-3">
                            <div className="bg-white rounded-xl shadow p-6 space-y-6">
                                <div className="border border-gray-200 rounded p-5">
                                    <div className="my-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="flex justify-center items-center">
                                            <img src="/images/produk/sampul_bakery.png" alt="Gambar Produk"  className="max-w-full h-auto rounded-lg"/>
                                            </div>

                                            <div className="md:col-span-2">
                                            <div className="overflow-x-auto">
                                                <table className="table-auto w-full text-left border-collapse">
                                                <tbody className="text-gray-700">
                                                    <tr>
                                                    <td className="py-1 pr-2 font-medium">Tanggal Pesan</td>
                                                    <td className="py-1 pr-2">:</td>
                                                    <td className="py-1">24 September 2025</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="py-1 pr-2 font-medium">Jenis Paket</td>
                                                    <td className="py-1 pr-2">:</td>
                                                    <td className="py-1">Premium</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="py-1 pr-2 font-medium">Jenis Desain</td>
                                                    <td className="py-1 pr-2">:</td>
                                                    <td className="py-1">Custom</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>

                                        <hr className="my-6 border-gray-300"/>

                                        <div className="flex justify-center">
                                            <a href="#"
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                            Ulasan
                                            </a>
                                        </div>

                                        <p className="text-gray-800 mt-4">
                                            <b>Ulasan anda</b> :
                                            <span className="text-yellow-400">
                                            ★★★★☆
                                            </span>
                                            <br/>
                                            Produk sangat bagus dan pengiriman cepat!
                                        </p>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded p-5">
                                    <div className="my-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="flex justify-center items-center">
                                            <img src="/images/produk/sampul_bakery.png" alt="Gambar Produk"  className="max-w-full h-auto rounded-lg"/>
                                            </div>

                                            <div className="md:col-span-2">
                                            <div className="overflow-x-auto">
                                                <table className="table-auto w-full text-left border-collapse">
                                                <tbody className="text-gray-700">
                                                    <tr>
                                                    <td className="py-1 pr-2 font-medium">Tanggal Pesan</td>
                                                    <td className="py-1 pr-2">:</td>
                                                    <td className="py-1">24 September 2025</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="py-1 pr-2 font-medium">Jenis Paket</td>
                                                    <td className="py-1 pr-2">:</td>
                                                    <td className="py-1">Premium</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="py-1 pr-2 font-medium">Jenis Desain</td>
                                                    <td className="py-1 pr-2">:</td>
                                                    <td className="py-1">Custom</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </div>
                                            </div>
                                        </div>

                                        <hr className="my-6 border-gray-300"/>

                                        <div className="flex justify-center">
                                            <a href="#"
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                            Ulasan
                                            </a>
                                        </div>

                                        <p className="text-gray-800 mt-4">
                                            <b>Ulasan anda</b> :
                                            <span className="text-yellow-400">
                                            ★★★★☆
                                            </span>
                                            <br/>
                                            Produk sangat bagus dan pengiriman cepat!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </main>
            </div>
        </div>
    )
}