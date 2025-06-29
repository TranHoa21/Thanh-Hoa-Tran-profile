import { useState } from 'react';

const tabs = ['Education', 'Professional Skills', 'Experience', 'Interview'];

const Resume = () => {
    const [activeTab, setActiveTab] = useState('Education');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Education':
                return (
                    <div className="grid md:grid-cols-2 gap-12 mt-12 relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-700 transform -translate-x-1/2 z-0"></div>

                        {/* Education */}
                        <div className="space-y-10 z-10">
                            {[
                                {
                                    title: 'Personal Portfolio April Fools',
                                    subtitle: 'University of DVI (1997 - 2001)',
                                    desc: 'The education should be very interactive...',
                                    rating: '4.30/5'
                                },
                                {
                                    title: 'Examples Of Personal Portfolio',
                                    subtitle: 'College of Studies (2000 - 2002)',
                                    desc: 'Maecenas finibus nec sem ut imperdiet...',
                                    rating: '4.50/5'
                                },
                                {
                                    title: 'Tips For Personal Portfolio',
                                    subtitle: 'University of Studies (1997 - 2001)',
                                    desc: 'If you are going to use a passage...',
                                    rating: '4.80/5'
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#2a2b30] p-6 rounded-lg shadow-md relative border-l-4 border-pink-500">
                                    <h4 className="text-white text-lg font-semibold">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                                    <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                                    <span className="bg-red-600 px-2 py-1 text-sm rounded text-white absolute top-4 right-4">{item.rating}</span>
                                </div>
                            ))}
                        </div>

                        {/* Experience */}
                        <div className="space-y-10 z-10">
                            {[
                                {
                                    title: 'Diploma in Web Development',
                                    subtitle: 'BSE in CSE (2004 - 2008)',
                                    desc: 'Contrary to popular belief...',
                                    rating: '4.70/5'
                                },
                                {
                                    title: 'The Personal Portfolio Mystery',
                                    subtitle: 'Job at Rainbow-Themes (2008 - 2016)',
                                    desc: 'Generate Lorem Ipsum which looks...',
                                    rating: '4.95/5'
                                },
                                {
                                    title: 'Diploma in Computer Science',
                                    subtitle: 'Works at Plugin Development (2016 - 2020)',
                                    desc: 'Maecenas finibus nec sem ut imperdiet...',
                                    rating: '5.00/5'
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#2a2b30] p-6 rounded-lg shadow-md relative border-l-4 border-pink-500">
                                    <h4 className="text-white text-lg font-semibold">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                                    <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                                    <span className="bg-red-600 px-2 py-1 text-sm rounded text-white absolute top-4 right-4">{item.rating}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'Professional Skills':
                return (
                    <div className="grid md:grid-cols-2 gap-16 mt-12">
                        {[
                            {
                                category: 'Design Skill',
                                skills: [
                                    ['Photoshot', 100],
                                    ['Figma', 95],
                                    ['Adobe XD', 60],
                                    ['Adobe Illustrator', 70],
                                    ['Design', 90]
                                ]
                            },
                            {
                                category: 'Development Skill',
                                skills: [
                                    ['HTML', 85],
                                    ['CSS', 80],
                                    ['JavaScript', 90],
                                    ['Software', 75],
                                    ['Plugin', 70]
                                ]
                            }
                        ].map((section, i) => (
                            <div key={i}>
                                <p className="uppercase text-pink-500 text-sm mb-2">Features</p>
                                <h4 className="text-2xl text-white font-bold mb-6">{section.category}</h4>
                                {section.skills.map(([skill, percent], j) => (
                                    <div key={j} className="mb-6">
                                        <div className="flex justify-between text-sm text-gray-300 mb-1">
                                            <span>{skill}</span>
                                            <span>{percent}%</span>
                                        </div>
                                        <div className="w-full bg-[#444] h-2 rounded-full overflow-hidden">
                                            <div
                                                className="h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-700"
                                                style={{ width: `${percent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                );

            case 'Experience':
                return (
                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="space-y-8">
                            <div className="bg-[#2a2b30] p-6 rounded-lg shadow-md">
                                <h4 className="text-white text-lg font-semibold">Frontend Developer</h4>
                                <p className="text-sm text-gray-400">Creative Studio (2020 - 2022)</p>
                                <p className="text-gray-400 text-sm mt-2">Developed user-friendly web interfaces using React.js, collaborated with design teams and optimized performance for modern browsers.</p>
                            </div>
                            <div className="bg-[#2a2b30] p-6 rounded-lg shadow-md">
                                <h4 className="text-white text-lg font-semibold">UI/UX Designer</h4>
                                <p className="text-sm text-gray-400">VisionTech Agency (2018 - 2020)</p>
                                <p className="text-gray-400 text-sm mt-2">Led design sprints and created intuitive prototypes using Figma. Worked closely with development to ensure design consistency.</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-[#2a2b30] p-6 rounded-lg shadow-md">
                                <h4 className="text-white text-lg font-semibold">Fullstack Developer</h4>
                                <p className="text-sm text-gray-400">InnovateX (2022 - Present)</p>
                                <p className="text-gray-400 text-sm mt-2">Built scalable web applications with Next.js, integrated REST APIs, and ensured backend efficiency using Node.js and PostgreSQL.</p>
                            </div>
                            <div className="bg-[#2a2b30] p-6 rounded-lg shadow-md">
                                <h4 className="text-white text-lg font-semibold">Freelance Developer</h4>
                                <p className="text-sm text-gray-400">Self-employed (2016 - 2018)</p>
                                <p className="text-gray-400 text-sm mt-2">Delivered custom websites for clients worldwide. Managed full-stack development, SEO, and CMS solutions.</p>
                            </div>
                        </div>
                    </div>
                );

            case 'Interview':
                return (
                    <div className="grid md:grid-cols-2 gap-12 mt-12">
                        <div className="space-y-8">
                            <div className="bg-[#2a2b30] p-6 rounded-lg shadow-md">
                                <h4 className="text-white text-lg font-semibold">Top Questions</h4>
                                <ul className="text-sm text-gray-300 list-disc ml-5 mt-3 space-y-1">
                                    <li>Tell us about yourself and your background.</li>
                                    <li>What are your strengths in design/development?</li>
                                    <li>How do you manage tight deadlines and pressure?</li>
                                    <li>Describe a challenging project and how you handled it.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-[#2a2b30] p-6 rounded-lg shadow-md">
                                <h4 className="text-white text-lg font-semibold">Interview Schedule</h4>
                                <ul className="text-sm text-gray-300 mt-3 space-y-2">
                                    <li><span className="text-pink-400">HR Round:</span> 9:00 AM - Monday</li>
                                    <li><span className="text-pink-400">Technical Test:</span> 2:00 PM - Wednesday</li>
                                    <li><span className="text-pink-400">Live Coding:</span> 10:00 AM - Friday</li>
                                    <li><span className="text-pink-400">Final Interview:</span> 3:00 PM - Next Monday</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="bg-[#1e1f26] py-20 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-center uppercase text-pink-500 text-xs mb-2 tracking-widest">7+ Years of Experience</p>
                <h2 className="text-4xl text-center font-bold">My Resume</h2>

                {/* Tabs */}
                <div className="mt-10 flex justify-center flex-wrap gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 ${activeTab === tab
                                    ? 'bg-red-600 text-white'
                                    : 'bg-[#2a2b30] text-gray-300 hover:bg-red-500 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {renderTabContent()}
            </div>
        </section>
    );
};

export default Resume;
