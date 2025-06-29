'use client';
import BannerSection from "@/components/sections/home/BannerSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import React from 'react';
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import TestimonialSlider from "@/components/sections/home/TestimonialSlider";
import ResumeSection from "@/components/sections/home/ResumeSection";
import AwesomeClients from "@/components/sections/home/AwesomeClients";
import PricingSection from "@/components/sections/home/PricingSection";
import BlogSection from "@/components/sections/home/BlogSection";
import ContactSection from "@/components/sections/home/ContactSection";

const HomePage = () => {
    return (
        <>
            <div id="home"><BannerSection /></div>
            <div id="features"><FeaturesSection /></div>
            <div id="portfolio"><PortfolioSection /></div>
            <div id="resume"><ResumeSection /></div>
            <div id="clients">
                <TestimonialSlider />
                <AwesomeClients />
            </div>
            <div id="pricing"><PricingSection /></div>
            <div id="blog"><BlogSection /></div>
            <div id="contacts"><ContactSection /></div>
        </>
    );
};

export default HomePage;
