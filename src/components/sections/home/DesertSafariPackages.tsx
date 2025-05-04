'use client'

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Dubai Dune Bashing Safari",
    location: "Dubai, United Arab Emirates",
    description:
      "Experience adrenaline-pumping dune rides, camel treks, and traditional Bedouin hospitality",
    date: "March, 15 2024",
    duration: "05 days",
    guests: "10-25 guests",
    price: 1800,
    oldPrice: 3600,
    discount: true,
    image: "/images/Lower-Zambezi-National-Park.webp",
  },
  {
    title: "Oman Wahiba Sands Escape",
    location: "Wahiba Sands, Oman",
    description:
      "Discover golden dunes, visit Bedouin villages, and enjoy peaceful nights in luxury desert camps",
    date: "May, 12 2024",
    duration: "06 days",
    guests: "15-30 guests",
    price: 2100,
    image: "/images/Livingstone-Zambia.webp",
  },
  {
    title: "Moroccan Sahara Adventure",
    location: "Merzouga, Morocco",
    description:
      "Journey through the breathtaking Sahara dunes, ride camels, and explore the Berber culture",
    date: "June, 08 2024",
    duration: "08 days",
    guests: "20-40 guests",
    price: 2400,
    oldPrice: 4800,
    discount: true,
    image: "/images/Kasanka-National-Park.webp",
  },
  {
    title: "Namib Desert Expedition",
    location: "Namib Desert, Namibia",
    description:
      "Experience towering red dunes, unique desert wildlife, riding camel and surreal landscapes",
    date: "July, 20 2024",
    duration: "09 days",
    guests: "10-20 guests",
    price: 3000,
    image: "/images/South-Luangwa-National-Park.webp",
  },
  {
    title: "White Desert Safari",
    location: "White Desert, Egypt",
    description:
      "Discover Egypt’s surreal White Desert, with its stunning chalk formations, and unique wildlife",
    date: "April, 02 2024",
    duration: "04 days",
    guests: "12-28 guests",
    price: 1500,
    oldPrice: 3000,
    discount: true,
    image: "/images/Lower-Zambezi-National-Park.jpg",
  },
  {
    title: "Serengeti Wildlife Safari",
    location: "Serengeti, Tanzania",
    description:
      "Embark on a thrilling safari through the Serengeti, home to lions, and the Great Migration spectacle",
    date: "May, 03 2024",
    duration: "07 days",
    guests: "15-35 guests",
    price: 3500,
    image: "/images/Livingstone-Zambia.webp",
  },
];

export default function DesertSafariPackages() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 my-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
            Our Packages
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Top-rated desert safari trips
          </h1>
        </div>
        <div className="mt-6 md:mt-0">
          <p className="text-sm text-gray-600 mb-3">
            Join thousands of happy travelers who’ve experienced the thrill and beauty of our desert tours.
          </p>
          <Button>See More</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    priority={false} // Use priority for images above the fold
                  />
                </motion.div>
                <div className="absolute top-2 left-2 space-x-2 flex">
                  <Badge className="bg-white text-gray-800">🏆 Top Tours</Badge>
                  {item.discount && (
                    <Badge className="bg-pink-100 text-pink-700">Disc. 50%</Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} /> {item.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} /> {item.guests}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Start from</p>
                    <p className="text-lg font-semibold text-gray-800">
                      ${item.price.toLocaleString()}
                      {item.oldPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          ${item.oldPrice.toLocaleString()}
                        </span>
                      )}
                    </p>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
