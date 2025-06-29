// components/FeaturesSection.tsx
import { FaBars, FaBookOpen, FaTv, FaMobileAlt, FaWifi } from 'react-icons/fa';
import { SiSlack } from 'react-icons/si';

const features = [
    {
        icon: <FaBars className="text-[#FF014F] text-3xl mb-4" />,
        title: "Business Stratagy",
        description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FaBookOpen className="text-[#FF014F] text-3xl mb-4" />,
        title: "App Development",
        description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
    },
    {
        icon: <FaTv className="text-[#FF014F] text-3xl mb-4" />,
        title: "App Development",
        description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
        icon: <FaMobileAlt className="text-[#FF014F] text-3xl mb-4" />,
        title: "Mobile App",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
    },
    {
        icon: <FaWifi className="text-[#FF014F] text-3xl mb-4" />,
        title: "CEO Marketing",
        description: "always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
        icon: <SiSlack className="text-[#FF014F] text-3xl mb-4" />,
        title: "Personal Portfolio April",
        description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="bg-[#1e1f26] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <p className="text-sm text-[#FF014F] uppercase tracking-widest mb-2">Features</p>
                <h2 className="text-4xl font-bold text-gray-100 mb-12">What I Do</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#2a2b30] rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
                        >
                            {feature.icon}
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
