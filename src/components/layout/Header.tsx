'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Clients", href: "#clients" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contacts" },
];

const Header = () => {
  const [activeId, setActiveId] = useState("home");

  // Scroll to section smoothly
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      // 👉 Thêm dòng này để đổi URL
      window.history.replaceState(null, "", href);

      // 👉 Cập nhật activeId luôn để nav highlight ngay lập tức
      setActiveId(href.replace("#", ""));
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && id !== activeId) {
              setActiveId(id);
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeId]);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1e1f26] text-white px-6 py-4 shadow-md">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick("#home")}>
          <Image
            src="/images/profile.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full border border-gray-700"
          />
          <span className="ml-2 text-base font-medium">INBIO</span>
        </div>

        {/* Navigation */}
        <nav className="hidden xl:flex flex-1 justify-center items-center space-x-8 text-[13px] uppercase tracking-wide">
          {navItems.map((item) => (
            <span
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`cursor-pointer transition duration-150 ${activeId === item.href.replace("#", "") ? "text-pink-500 font-bold" : "hover:text-pink-500"
                }`}
            >
              {item.label}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
