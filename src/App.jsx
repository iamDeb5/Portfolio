import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Magnetic
  useEffect(() => {
    const magneticElements = document.querySelectorAll(".magnetic");

    magneticElements.forEach((el) => {
      const move = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      };

      const leave = () => {
        el.style.transition = "transform 0.3s ease";
        el.style.transform = "translate(0,0)";
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
    });
  }, []);

  // Text reveal
  useEffect(() => {
    gsap.utils.toArray(".reveal-text").forEach((el) => {
      gsap.fromTo(
        el,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        },
      );
    });
  }, []);

  // Copy email
  const copyEmail = () => {
    navigator.clipboard.writeText("khanradebojyoti@gmail.com");
    alert("Email copied!");
  };

  const projects = [
    {
      title: "Moodify – Mood Based Music App",
      desc: "A full-stack app that recommends music based on user mood with authentication and responsive UI.",
      image: "/moodify.gif",
      live: "https://moodify-zzta.onrender.com",
      github: "https://github.com/iamDeb5/Moodify",
    },
    {
      title: "Perplexity - AI Chat App",
      desc: "Real-time chat application with typing indicators and socket-based communication.",
      image: "/perplexityGIF.gif",
      live: "#",
      github:
        "https://github.com/iamDeb5/BackEnd-Practice-Projects/tree/main/Perplexity",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind",
    "Bootstrap",
    "Context API",
    "Redux",
    "JWT",
    "Postman",
    "Git",
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-[#AAA97F]/30">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20">
        <div className="overflow-hidden">
          <h1 className="text-[11vw] font-bold leading-none text-[#AAA97F] tracking-tight reveal-text">
            Debojyoti
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-[11vw] font-bold leading-none tracking-tight reveal-text">
            Khanra
          </h1>
        </div>

        <p className="mt-6 text-gray-400 max-w-md">
          MERN stack developer focused on building scalable and clean web
          applications with modern technologies.
        </p>

        {/* Resume */}
        <div className="mt-6">
          <a
            href="/Debojyoti_Khanra_Resume_MERN.pdf"
            download
            className="magnetic relative inline-flex items-center gap-2 text-sm tracking-wide text-[#76869B] group"
          >
            Download Resume
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#76869B]/30 overflow-hidden">
              <span className="block w-full h-full bg-[#AAA97F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </span>
          </a>
        </div>
      </section>

      {/* PROJECT HEADER (UPGRADED) */}
      <section className="px-6 md:px-20 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#AAA97F] tracking-tight reveal-text">
            Selected Work
          </h2>

          <p className="text-gray-500 text-sm max-w-sm">
            A curated selection of projects focusing on performance, design and
            real-world use cases.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className="py-20 border-t border-white/10 group relative"
          >
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none hidden md:block">
              <img
                src={p.image}
                className="w-64 rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="overflow-hidden">
              <h2 className="text-2xl md:text-4xl font-semibold mb-3 text-[#AAA97F] reveal-text">
                {p.title}
              </h2>
            </div>

            <p className="text-gray-400 max-w-xl opacity-70 group-hover:opacity-100 transition">
              {p.desc}
            </p>

            <div className="mt-4 flex gap-8 text-sm">
              {[
                { label: "Live", href: p.live },
                { label: "Code", href: p.github },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="magnetic relative inline-flex items-center gap-2 text-[#76869B] group"
                >
                  {link.label}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>

                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#76869B]/30 overflow-hidden">
                    <span className="block w-full h-full bg-[#AAA97F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10">
        <h2 className="text-3xl text-[#AAA97F] mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4 max-w-3xl">
          {skills.map((s, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="w-2 h-2 rounded-full bg-[#AAA97F]" />
              <span className="text-sm text-gray-300 group-hover:text-white">
                {s}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10">
        <h2 className="text-3xl text-[#AAA97F] mb-4">Currently Building</h2>
        <p className="text-gray-400 max-w-xl">
          Exploring scalable backend architecture and improving real-time
          performance in MERN stack applications.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10">
        <h2 className="text-3xl text-[#AAA97F] mb-4">About</h2>
        <p className="text-gray-400 max-w-xl">
          I’m a MERN stack developer who enjoys building practical and
          user-focused web applications. I like working on both frontend and
          backend, and I’m always trying to improve how I structure and scale my
          projects.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10">
        <h2 className="text-3xl text-[#AAA97F] mb-8 reveal-text">Contact</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-4">
            <p className="text-gray-400 max-w-md">
              Got an idea or opportunity? Let’s connect and create something
              meaningful.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="mailto:khanradebojyoti@gmail.com"
                className="text-[#76869B] underline"
              >
                khanradebojyoti@gmail.com
              </a>

              <button
                onClick={copyEmail}
                className="text-xs px-3 py-1 border border-white/10 rounded-full hover:border-[#AAA97F]/40 transition"
              >
                Copy
              </button>
            </div>

            <a
              href="mailto:khanradebojyoti@gmail.com"
              className="inline-block mt-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#AAA97F]/40 transition"
            >
              Start a conversation ↗
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {[
              { name: "GitHub", href: "https://github.com/iamDeb5" },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/debojyotikhanra/",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="group flex justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <span className="text-gray-300 group-hover:text-white">
                  {s.name}
                </span>
                <span className="text-[#AAA97F] group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-16 border-t border-white/10 text-center">
        <p className="text-xs text-gray-500">Crafted with precision • © 2026</p>
      </footer>
    </div>
  );
}
