// components/PortfolioSection.tsx
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "The services provide for design",
    tag: "Development",
    likes: 600,
    image: "/portfolio/1.png",
  },
  {
    title: "Mobile app landing design & app maintain",
    tag: "Application",
    likes: 750,
    image: "/portfolio/2.png",
  },
  {
    title: "Logo design creativity & Application",
    tag: "Photoshop",
    likes: 630,
    image: "/portfolio/3.png",
  },
  {
    title: "Mobile app landing design & Services",
    tag: "Figma",
    likes: 380,
    image: "/portfolio/4.png",
  },
  {
    title: "Design for tecnology & services",
    tag: "Web Design",
    likes: 280,
    image: "/portfolio/5.png",
  },
  {
    title: "App for tecnology & services",
    tag: "Web Design",
    likes: 680,
    image: "/portfolio/6.png",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-[#1e1f26] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm text-[#FF014F] uppercase tracking-widest mb-2">
          Visit my portfolio and keep your feedback
        </p>
        <h2 className="text-4xl font-bold text-gray-100 mb-12">My Portfolio</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-[#2a2b30] rounded-xl p-4 shadow-lg hover:shadow-2xl transition"
            >
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                <span className="uppercase tracking-wide text-[#FF014F]">{item.tag}</span>
                <span className="flex items-center gap-1">
                  <FaRegHeart className="text-white" /> {item.likes}
                </span>
              </div>
              <h3 className="text-white font-medium text-lg leading-snug">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
