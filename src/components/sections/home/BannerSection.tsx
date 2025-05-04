export default function HeroSection() {
    return (
        <section className="relative bg-[url('/images/background.webp')] bg-cover bg-center text-white min-h-[90vh] flex items-center justify-center">
            {/* Lớp phủ nền tối như bạn đã có */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Nội dung chính */}
            <div className="relative z-10 text-center px-4">
                <p className="text-orange-400 tracking-widest uppercase drop-shadow-md">
                    Safari Adventures in Zambia
                </p>
                <h1 className="text-4xl md:text-6xl font-bold my-4 drop-shadow-lg">
                    Begin your journey with Mufilika Tours and Safaris
                </h1>
                <p className="max-w-xl mx-auto mb-6 drop-shadow-md">
                    Experience the majestic Victoria Falls, explore untamed wilderness, and create unforgettable memories in the heart of Africa.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-[#A67C52] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#916842] transition">
                        Plan Trip
                    </button>
                    <button className="border border-[#A67C52] text-[#A67C52] px-6 py-3 rounded-md bg-white/10 backdrop-blur hover:bg-white/20 transition">
                        Explore More
                    </button>
                </div>
            </div>

            {/* Form đè nửa dưới */}
            <div className="absolute bottom-0 bottom-[-20%] lg:bottom-[-10%] md:bottom-[-10%] sm:bottom-[-15%] left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-4">
                <div className="bg-white rounded-2xl shadow-2xl px-6 py-6 ring-1 ring-black/5">
                    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-end">
                        {/* Destination */}
                        <div>
                            <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                                Destination
                            </label>
                            <select
                                id="destination"
                                name="destination"
                                className="block w-full rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm px-4 py-2"
                            >
                                <option>UAE</option>
                                <option>Egypt</option>
                                <option>Morocco</option>
                                <option>Africa</option>
                            </select>
                        </div>

                        {/* Departure Date */}
                        <div>
                            <label htmlFor="departure" className="block text-sm font-semibold text-gray-700 mb-2">
                                Departure Date
                            </label>
                            <input
                                type="date"
                                id="departure"
                                name="departure"
                                className="block w-full rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm px-4 py-2"
                            />
                        </div>

                        {/* Tour Type */}
                        <div>
                            <label htmlFor="tourType" className="block text-sm font-semibold text-gray-700 mb-2">
                                Tour Type
                            </label>
                            <select
                                id="tourType"
                                name="tourType"
                                className="block w-full rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm focus:ring-orange-500 focus:border-orange-500 text-sm px-4 py-2"
                            >
                                <option>Desert Adventure</option>
                                <option>Cultural Experience</option>
                                <option>Luxury Safari</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-[#A67C52] hover:bg-[#916842] text-white font-semibold py-3 px-4 shadow-lg text-sm transition duration-150"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                Search Tours
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}
