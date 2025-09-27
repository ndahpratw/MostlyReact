import Sidebar from "../../layout/sidebar";

export default function Profile() {

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
                            <h2 className="text-xl font-semibold text-gray-900">Profil Saya</h2>
                        </div>
                    </div>
                </header>
                
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                        
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                Informasi Personal
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                                    <input type="text" id="inputName" value="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="inputEmail" value="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                                    <input type="tel" id="inputPhone" value="" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                                </div>
                            </div>
                            
                            <div id="saveButtons" className="flex justify-between space-x-4 my-5">
                                <button id="cancelBtn" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                    Batal
                                </button>
                                <button id="saveBtn" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                                    <span>Simpan Perubahan</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}