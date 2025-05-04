'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Expert Guides',
        description: 'Our expert guides ensure a safe, fun, and memorable adventure in the desert.',
        icon: '/images/icon1.png', // bạn cần thêm icon vào thư mục public/icons
    },
    {
        title: 'Custom Packages',
        description: 'Customize your desert adventure to match your schedule, interests, and preferences.',
        icon: '/images/icon2.png',
    },
    {
        title: 'Luxury Amenities',
        description: 'Enjoy luxury vehicles, fine dining, and exclusive stays for a premium experience.',
        icon: '/images/icon3.png',
    },
    {
        title: 'Authentic Experiences',
        description: 'Immerse yourself in desert culture with camel rides, local cuisine, and Bedouin tales.',
        icon: '/images/icon4.png',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#f1f3e8] py-20 px-4 md:px-10 lg:px-20 text-[#1e1e1e]">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="uppercase text-sm font-semibold tracking-wider text-[#9B6A3F] mb-2">
                    Why Choose Us
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why we’re different</h2>
                <p className="text-gray-600 text-base">
                    We offer unique desert tours with local expertise, premium services, and countless unforgettable
                    moments designed just for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Left Features */}
                <div className="flex flex-col justify-between gap-6 h-[400px]">
                    {features.slice(0, 2).map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex-1 border border-[#839163] p-6 rounded-md flex items-start gap-4 bg-white/40 backdrop-blur-sm hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Image src={item.icon} alt={item.title} width={60} height={60} loading="lazy" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Center Image */}
                <div className="flex justify-center">
                    <motion.div
                        className="w-full h-[400px] relative rounded-md overflow-hidden shadow-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/images/bg-center.webp" // Thay bằng ảnh bạn dùng
                            alt="Guide"
                            layout="fill"
                            objectFit="cover"
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Right Features */}
                <div className="flex flex-col justify-between gap-6 h-[400px]">
                    {features.slice(2).map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex-1 border border-[#839163] p-6 rounded-md flex items-start gap-4 bg-white/40 backdrop-blur-sm hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Image src={item.icon} alt={item.title} width={60} height={60} loading="lazy" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
