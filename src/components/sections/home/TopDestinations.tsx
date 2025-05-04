'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const destinations = [
  {
    name: 'South Luangwa National Park',
    image: '/images/South-Luangwa-National-Park.webp',
    tours: 24,
    activities: 15,
  },
  {
    name: 'Kasanka National Park',
    image: '/images/Kasanka-National-Park.webp',
    tours: 12,
    activities: 14,
  },
  {
    name: 'Livingstone, Zambia',
    image: '/images/Livingstone-Zambia.webp',
    tours: 10,
    activities: 12,
  },
  {
    name: 'Lower Zambezi National Park',
    image: '/images/Lower-Zambezi-National-Park.jpg',
    tours: 14,
    activities: 16,
  },
]

export default function TopDestinations() {
  return (
    <section className="bg-[#4B2E2B] text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h3 className="uppercase text-sm tracking-wider font-semibold text-[#E5B37C]">Top Destinations</h3>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">Quest for True Zambia</h2>
        <p className="text-base text-gray-300">
          Discover Zambia’s most captivating landscapes — from breathtaking waterfalls to untouched wildlife reserves. Each destination unveils a unique cultural and natural experience, waiting for you to explore with Mufilika.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <motion.div
            key={dest.name}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-[#ffffff0a] backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-64 w-full">
              <Image
                src={dest.image}
                alt={dest.name}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#000000c0] to-transparent p-4">
              <h3 className="text-xl font-semibold mb-1">{dest.name}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span>🧳 {dest.tours} Tours</span>
                <span>🥾 {dest.activities} Activities</span>
              </div>
              <button className="mt-4 w-full rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#4B2E2B]">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-gradient-to-r from-[#B8835D] to-[#d69f6a] text-white rounded-full font-medium text-sm shadow-md hover:scale-105 transition-transform">
          More Destinations
        </button>
      </div>
    </section>
  )
}
