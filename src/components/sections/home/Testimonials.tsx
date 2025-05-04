'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
        name: 'Emma Johnson',
        location: 'Sydney, Australia',
        image: '/images/female-tourist-with-camera.webp',
        quote: `The desert safari was magical! Stunning sunsets, thrilling dunes, and expert guides made it unforgettable. Every detail was flawless, leaving me with cherished memories that I’ll treasure forever.`,
    },
    {
        name: 'Carlos Mendez',
        location: 'Madrid, Spain',
        image: '/images/cheerful-guy-enjoying-outdoor-coffee-break.webp',
        quote: `I never imagined the desert could be so captivating. The guides were knowledgeable and made every moment exciting. The camp under the stars was a highlight of my trip.`,
    },
    {
        name: 'Aisha Khan',
        location: 'Dubai, UAE',
        image: '/images/handsome-man.webp',
        quote: `What a breathtaking experience! From sandboarding to camel rides, everything was perfectly organized. I felt safe and thrilled the whole time.`,
    },
    {
        name: 'Liam O’Connor',
        location: 'Dublin, Ireland',
        image: '/images/portrait-young-woman-with-digital-camera.webp',
        quote: `Absolutely phenomenal! The team made us feel like VIPs. The local stories and history shared by the cultural guide added so much meaning to the journey.`,
    },
]

export default function Testimonials() {
    return (
        <section className="bg-[#e6e9dd] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[#876c56]">Testimonials</p>
                    <h2 className="text-4xl font-bold mt-2 mb-4 text-black">Real stories from our travelers</h2>
                    <p className="text-gray-600 max-w-2xl">
                        Hear what our happy adventurers have to say! Discover their unforgettable desert safari
                        experiences, from thrilling dune rides to cherished moments under the starry desert skies.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={40}
                    slidesPerView={1}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="grid md:grid-cols-2 items-center gap-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <blockquote className="italic text-xl text-[#2c2c2c] leading-relaxed mb-6">
                                        “{item.quote}”
                                    </blockquote>
                                    <div className="h-1 w-10 bg-green-900 mb-2" />
                                    <p className="font-semibold text-lg text-black">{item.name}</p>
                                    <p className="text-gray-500">{item.location}</p>
                                </div>

                                <motion.div
                                    className="relative w-full h-[320px] rounded overflow-hidden"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        loading="lazy"
                                        className="object-cover object-top rounded"
                                    />
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
