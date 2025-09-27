import Sidebar from "../../layout/sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import pkg from "lodash";
import { data, useSearchParams } from "react-router";
const { debounce } = pkg;

const getTransactions = async (data: any) => {
  try {
    const baseUrl = 'http://localhost:8000/api/transactions';
    const params = new URLSearchParams();
    if (data?.page) {
      params.append('page', data.page);
    }
    const perPage = data.perPage ? data.perPage : 2;
    params.append('per_page', perPage.toString());
    if (data?.search) {
      params.append('search', data.search);
    }
    const url = `${baseUrl}?${params.toString()}`;
    // url = "http://localhost:8000/api/transactions?page=1&per_page=5&search=..."
    const response = await axios.get(url);
    data.setData(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default function RiwayatPesanan() {

    const [paginatedData, setPaginatedData] = useState<any>({ data: [], links: [] })
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log(searchParams.get('search'))
        getTransactions({
        setData: setPaginatedData,
        search: searchParams.get('search') || ''
        })
    }, [])

    const debouncedSearch = debounce((e) => {
        setSearchParams({ search: e.target.value });
        getTransactions({ search: e.target.value, setData: setPaginatedData })
    }, 500);

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
                                <input onChange={debouncedSearch} type="text" className="border-2 w-full rounded p-1" placeholder="cari" />
                                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                    <thead>
                                        <tr className="bg-gray-100 text-gray-700 text-center">
                                            <td> Tanggal Transaksi </td>
                                            <td> Service </td>
                                            <td> Paket </td>
                                            <td> Harga </td>
                                            <td> Status </td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.data.map((item: any, idx: number) => (
                                            <tr key={idx} className={`text-center ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}>
                                                <td className="px-6 py-3 border">{item.tanggal_transaksi}</td>
                                                <td className="px-6 py-3 border">{item.service_name}</td>
                                                <td className="px-6 py-3 border">{item.package_name}</td>
                                                <td className="px-6 py-3 border font-semibold text-gray-800">{item.total_harga}</td>
                                                <td className="px-6 py-3 border">{item.status}</td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    
                                {/* pagination block */}
                                <div className="mt-4 flex justify-end space-x-2">
                                <button
                                    disabled={paginatedData.current_page == 1}
                                    onClick={() => getTransactions({ setData: setPaginatedData, search: searchParams.get('search') || '', page: 1 })}
                                    className={`px-3 py-1 rounded ${paginatedData.current_page == 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition`}
                                >First Page</button>
                                {
                                    paginatedData.links.map((link: any, idx: number) => {
                                    if (idx == 0 || idx == paginatedData.links.length - 1) {
                                        return null;
                                    }

                                    return (
                                        <button
                                        key={idx}
                                        disabled={link.active}
                                        onClick={() => getTransactions({ setData: setPaginatedData, search: searchParams.get('search') || '', page: link.page })}
                                        className={`px-3 py-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        ></button>
                                    )
                                    }
                                    )
                                }
                                <button
                                    disabled={paginatedData.current_page == paginatedData.last_page}
                                    onClick={() => getTransactions({ setData: setPaginatedData, search: searchParams.get('search') || '', page: paginatedData.last_page })}
                                    className={`px-3 py-1 rounded ${paginatedData.current_page == paginatedData.last_page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400 hover:text-white transition`}
                                >Last Page</button>
                                </div>

                            </div>
                       </div>
                    </div>
                </main>
            </div>
        </div>
    )
}