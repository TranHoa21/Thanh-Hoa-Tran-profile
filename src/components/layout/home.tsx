'use client';
import BannerSection from "@/components/sections/home/BannerSection";
import TopDestinations from "@/components/sections/home/TopDestinations"
import React from 'react';
import About from "@/components/sections/home/About";
import DesertSafariPackages from "@/components/sections/home/DesertSafariPackages"
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import BlogPreviewSection from "@/components/sections/home/BlogPreviewSection";
import TourGuides from "@/components/sections/home/TourGuides";
import Testimonials from "@/components/sections/home/Testimonials";
import Gallery from "@/components/sections/home/Gallery";
import BookingForm from "@/components/sections/home/BookingForm";
import FAQ from "@/components/sections/home/FAQ"
const HomePage = () => {
    return (
        <>
            <BannerSection />
            <About />
            <TopDestinations />
            <WhyChooseUs />
            <DesertSafariPackages />
            <TourGuides />
            <Testimonials />
            <FAQ />
            <Gallery />
            <BookingForm />
            <BlogPreviewSection />
        </>
    );
};

export default HomePage;
