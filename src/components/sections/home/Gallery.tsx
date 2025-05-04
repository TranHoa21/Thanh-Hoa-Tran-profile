'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
    { src: '/images/Lower-Zambezi-National-Park.webp', alt: 'Sand toss', colSpan: 'col-span-2', rowSpan: 'row-span-2' },
    { src: '/images/fedf2c08346a04570eb0fe0004b7569b.jpg', alt: 'Dune dance' },
    { src: '/images/8ec57761edcd91257859425459032e90.jpg', alt: 'Selfie man' },
    { src: '/images/background.webp', alt: 'Woman sitting on sand' },
    { src: '/images/closeup-shot-elephants-standing-near-lake-sunset.webp', alt: 'Woman in blue dress' },
]

export default function Gallery() {
    return (
        <section className="bg-[#4e2d20] py-20 px-4 text-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <p className="text-sm uppercase tracking-widest text-[#d1bfa7] font-semibold">Our Galleries</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Gallery of memories</h2>
                <p className="text-[#d1bfa7] max-w-2xl mx-auto">
                    Enjoy our photo gallery filled with incredible moments from our desert safaris, showcasing
                    the adventure, beauty, and excitement of the desert
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`relative aspect-[4/3] rounded overflow-hidden ${image.colSpan || ''} ${image.rowSpan || ''}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            loading="lazy"
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
