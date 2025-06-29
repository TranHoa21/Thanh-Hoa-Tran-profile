'use client';

import Image from 'next/image';

const blogPosts = [
    {
        id: 1,
        title: 'T-shirt design is the part of design',
        category: 'Canada',
        readingTime: '2 min read',
        image: '/images/blog1.jpg',
    },
    {
        id: 2,
        title: 'The services provide for design',
        category: 'Development',
        readingTime: '2 hour read',
        image: '/images/blog2.jpg',
    },
    {
        id: 3,
        title: 'Mobile app landing design & app maintain',
        category: 'Application',
        readingTime: '5 min read',
        image: '/images/blog3.jpg',
    },
];

export default function BlogSection() {
    return (
        <section className="bg-[#0F1116] text-white py-20 px-6 md:px-24">
            <h4 className="text-center text-[#FF0000] uppercase text-sm mb-2">
                Visit My Blog and Keep Your Feedback
            </h4>
            <h2 className="text-center text-4xl font-bold mb-12">My Blog</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-[#1A1C22] rounded-xl shadow-lg hover:shadow-xl transition p-4"
                    >
                        <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
                            <Image
                                src={post.image}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                            <span className="text-[#FF0000] font-semibold uppercase">
                                {post.category}
                            </span>
                            <span>{post.readingTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-100 leading-snug">
                            {post.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
