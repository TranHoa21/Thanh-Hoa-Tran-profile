'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Nevine Acotanza',
    role: 'Chief Operating Officer',
    company: 'RAINBOW-THEMES',
    avatar: '/avatar1.jpg',
    project: 'Android App Development',
    platform: 'via Upwork',
    date: 'Mar 4, 2015 – Aug 30, 2021',
    content:
      'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris .',
    rating: 4,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#1e1f26] text-white py-20 px-4 md:px-8 relative">
      <h4 className="text-center text-sm text-red-600 uppercase font-semibold mb-1 tracking-widest">
        What Clients Say
      </h4>
      <h2 className="text-4xl font-bold text-center mb-12">Testimonial</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full max-w-5xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start justify-center relative">

              {/* Left: Avatar Card */}
              <div className="relative z-10 bg-[#2a2b30] p-6 rounded-xl shadow-lg w-full max-w-xs">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={400}
                  height={400}
                  className="rounded-md object-cover mb-6"
                />
                <p className="text-red-600 text-xs uppercase tracking-wide mb-1">
                  {t.company}
                </p>
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>

              {/* Right: Testimonial Card */}
              <div className="relative z-10 bg-[#2a2b30] p-6 rounded-xl shadow-lg w-full max-w-xl">
                {/* Quote icon */}
                <div className="absolute text-[100px] text-gray-600 opacity-10 top-6 left-6 select-none pointer-events-none">
                  &ldquo;&rdquo;
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold leading-tight">{t.project}</h3>
                      <p className="text-sm text-gray-400">
                        {t.platform} – {t.date}
                      </p>
                    </div>

                    {/* Star rating box */}
                    <div className="bg-[#1e1f26] px-2 py-1 rounded-md flex items-center shadow">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={14}
                          fill="yellow"
                          className="text-yellow-400 mr-0.5"
                        />
                      ))}
                    </div>
                  </div>
                  <hr className="border-t border-gray-600 mb-4" />
                  <p className="text-sm text-gray-300 leading-relaxed">{t.content}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dot style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #888;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #dc2626; /* Tailwind red-600 */
        }
      `}</style>
    </section>
  );
}
