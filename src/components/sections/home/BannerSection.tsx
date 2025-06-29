// components/HeroBanner.tsx
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const HeroBanner = () => {
    return (
        <section className="bg-[#1e1f26] text-white py-24 ui-font">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Left: Text */}
                <div className="space-y-4">
                    <p className="uppercase text-sm tracking-widest text-gray-400">Welcome to my world</p>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hi, I’m <span className="text-[#FF014F] font-bold">Trần Thanh Hòa</span>
                        <br />
                        <span className="text-white font-bold">a{' '}
                            <Typewriter
                                words={['Developer', 'Designer', 'Freelancer', 'Mentor']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-xl leading-relaxed">
                        I use animation as a third dimension by which to simplify experiences and guiding through
                        each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that matter.
                    </p>

                    {/* Social + Skill section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-md ">
                        {/* Find with me */}
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Find with me</p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[#2a2b30] shadow-lg hover:bg-[#FF014F] transition"
                                >
                                    <FaFacebookF className="text-white text-lg" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[#2a2b30] shadow-lg hover:bg-[#FF014F] transition"
                                >
                                    <FaInstagram className="text-white text-lg" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-[#2a2b30] shadow-lg hover:bg-[#FF014F] transition"
                                >
                                    <FaLinkedinIn className="text-white text-lg" />
                                </a>
                            </div>
                        </div>

                        {/* Best skill on */}
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Best skill on</p>
                            <div className="flex space-x-4">
                                <div className="p-3 rounded-lg bg-[#2a2b30] shadow-lg">
                                    <SiNextdotjs className="text-white text-xl" />
                                </div>
                                <div className="p-3 rounded-lg bg-[#2a2b30] shadow-lg">
                                    <FaReact className="text-blue-400 text-xl" />
                                </div>
                                <div className="p-3 rounded-lg bg-[#2a2b30] shadow-lg">
                                    <FaNodeJs className="text-green-500 text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center">
                    <div className="p-4 bg-[#2a2b30] rounded-[40px] shadow-[0_0_60px_rgba(0,0,0,0.2)]">
                        <Image
                            src="/images/profile2.png"
                            alt="Trần Thanh Hòa"
                            width={350}
                            height={500}
                            className="rounded-[30px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
