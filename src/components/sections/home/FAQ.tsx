'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
    {
        question: 'Are meals included in the safari package?',
        answer:
            'Yes, most safari packages include meals. You can choose from standard, vegetarian, or special dietary options when booking.',
    },
    {
        question: 'Is the safari suitable for beginners?',
        answer:
            'Absolutely! Our tours are designed for all levels of experience. Expert guides will ensure you feel safe and enjoy every moment.',
    },
    {
        question: 'What is the best time to visit the desert?',
        answer:
            'The best time to visit is from October to April when temperatures are cooler, making outdoor activities more enjoyable.',
    },
    {
        question: 'Do I need special gear for the safari?',
        answer:
            'No special gear is needed. Comfortable clothing, sunglasses, and sunscreen are usually enough. We’ll provide anything else required.',
    },
    {
        question: 'Are there age restrictions for safaris?',
        answer:
            'Most safaris welcome all ages, but some activities like dune bashing may have minimum age requirements for safety reasons.',
    },
    {
        question: 'What wildlife can I expect to see?',
        answer:
            'Expect to see desert foxes, Arabian oryx, gazelles, and various bird species. Wildlife sightings vary depending on time and location.',
    },
    {
        question: 'Can I book a private desert safari?',
        answer:
            'Yes! We offer customizable private tours for individuals, couples, or groups looking for a more personalized experience.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-[#f9f6f0] py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div>
                    <p className="text-sm font-semibold tracking-widest uppercase text-[#876c56]">FAQ</p>
                    <h2 className="text-4xl font-bold mt-2 mb-4 text-black">Got questions? We have answers!</h2>
                    <p className="text-gray-600 mb-6 max-w-md">
                        Get the answers you need to plan your perfect desert safari, from booking details to tour highlights.
                    </p>
                    <div className="flex gap-4 mb-6">
                        <button className="bg-[#a8754f] text-white font-semibold px-5 py-2 rounded">
                            All Questions
                        </button>
                        <button className="border border-[#a8754f] text-[#a8754f] font-semibold px-5 py-2 rounded">
                            Ask Question
                        </button>
                    </div>
                    <div className="w-full h-64 relative rounded overflow-hidden">
                        <Image
                            src="/images/closeup-shot-elephants-standing-near-lake-sunset.webp"
                            alt="Desert explorer"
                            fill
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b py-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <h3 className="font-semibold text-lg text-[#3d3d3d]">{faq.question}</h3>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-[#a8754f]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#a8754f]" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.p
                                        className="text-gray-600 mt-2"
                                        key="answer"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
