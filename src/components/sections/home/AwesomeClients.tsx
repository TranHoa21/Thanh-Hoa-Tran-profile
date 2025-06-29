'use client';

import { useState } from 'react';
import Image from 'next/image';

const tabs = [
    'JavaScript',
    'Product Design',
    'Wordpress',
    'HTML to React',
    'React To Laravel',
    'Python',
];

const tabData: { [key: string]: { name: string; image: string }[] } = {
    JavaScript: [
        { name: 'John Due', image: '/logos/ms.png' },
        { name: 'Smiths Marth', image: '/logos/jes.png' },
        { name: 'Add Dev', image: '/logos/studio.png' },
    ],
    'Product Design': [
        { name: 'Jone Due', image: '/logos/fashion.png' },
        { name: 'John Due', image: '/logos/ms.png' },
        { name: 'Adon Smith', image: '/logos/jes.png' },
        { name: 'Smitha Mila', image: '/logos/ms.png' },
        { name: 'Sultana Mila', image: '/logos/jes.png' },
        { name: 'Jannat', image: '/logos/ms.png' },
        { name: 'Mila Dus', image: '/logos/jes.png' },
        { name: 'Marth Smiths', image: '/logos/ms.png' },
        { name: 'Marth Smiths', image: '/logos/studio.png' },
    ],
    Wordpress: [],
    'HTML to React': [],
    'React To Laravel': [],
    Python: [],
};

export default function AwesomeClients() {
    const [activeTab, setActiveTab] = useState(tabs[1]);

    return (
        <section className="bg-[#0F1116] text-white py-20 px-4 md:px-16">
            <h4 className="text-sm text-red-600 uppercase mb-2 tracking-wide">
                Popular Clients
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Awesome Clients</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Tabs */}
                <div className="col-span-1 bg-[#12141B] rounded-xl p-4 space-y-2 shadow-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full text-left px-6 py-3 rounded-lg font-medium transition-all duration-200
                            ${activeTab === tab
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-[#1A1C22] text-gray-300 hover:bg-[#2A2C33]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Client Cards */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tabData[activeTab]?.map((client, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1A1C22] p-6 rounded-xl shadow hover:shadow-xl transition duration-200 text-center"
                        >
                            <div className="h-20 mb-4 flex items-center justify-center">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    width={100}
                                    height={40}
                                    className="object-contain grayscale invert"
                                />
                            </div>
                            <p className="text-gray-300 text-sm">{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
