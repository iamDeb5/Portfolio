import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const cursorRef = useRef(null);

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const grow = () => (cursor.style.transform = "scale(2)");
    const shrink = () => (cursor.style.transform = "scale(1)");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, h2").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Scroll reveal
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  const projects = [
    {
      title: "Chat App",
      desc: "Real-time chat with typing indicators & socket architecture",
      image: "/project1.png",
      live: "#",
      github: "#",
    },
    {
      title: "Job Tracker",
      desc: "Track applications with analytics dashboard",
      image: "/project2.png",
      live: "#",
      github: "#",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind",
    "Socket.io",
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen cursor-none selection:bg-[#AAA97F]/30">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-[#AAA97F] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
      />

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20">
        <h1 className="text-[11vw] font-bold leading-none text-[#AAA97F] tracking-tight">
          Debojyoti
        </h1>
        <h1 className="text-[11vw] font-bold leading-none tracking-tight">
          Khanra
        </h1>
        <p className="mt-6 text-gray-400 max-w-md text-sm md:text-base">
          Building clean, modern & aesthetic web experiences.
        </p>

        {/* Resume + Status */}
        <div className="mt-6 flex flex-col gap-2">
          <a
            href="/resume.pdf"
            download
            className="text-sm underline text-[#76869B] hover:translate-x-1 transition"
          >
            Download Resume
          </a>
          <p className="text-xs text-gray-500">
            Open to opportunities • Available for freelance
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-20">
        {projects.map((p, i) => (
          <div
            key={i}
            className="py-24 border-t border-white/10 group relative reveal"
          >
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none hidden md:block">
              <img
                src={p.image}
                alt="preview"
                className="w-64 rounded-xl shadow-2xl"
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold mb-3 text-[#AAA97F] group-hover:translate-x-2 transition">
              {p.title}
            </h2>

            <p className="text-gray-400 max-w-xl text-sm md:text-base opacity-70 group-hover:opacity-100 transition">
              {p.desc}
            </p>

            <div className="mt-5 flex gap-6 text-sm">
              <a
                href={p.live}
                className="underline text-[#76869B] hover:translate-x-1 transition"
              >
                Live
              </a>
              <a
                href={p.github}
                className="underline text-[#76869B] hover:translate-x-1 transition"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10 reveal">
        <h2 className="text-3xl text-[#AAA97F] mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10 reveal">
        <h2 className="text-3xl text-[#AAA97F] mb-4">Currently Building</h2>
        <p className="text-gray-400 max-w-xl text-sm md:text-base">
          Working on a real-time chat application with scalable architecture and
          performance optimization.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10 reveal">
        <h2 className="text-3xl text-[#AAA97F] mb-4">About</h2>
        <p className="text-gray-400 max-w-xl text-sm md:text-base">
          I’m a developer focused on building performant, visually engaging and
          user-friendly web experiences.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-20 py-24 border-t border-white/10 reveal">
        <h2 className="text-3xl text-[#AAA97F] mb-4">Contact</h2>
        <p className="text-gray-400 mb-3">Let’s build something great.</p>
        <a href="mailto:your@email.com" className="underline text-[#76869B]">
          your@email.com
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-20 py-16 border-t border-white/10 text-center">
        <p className="text-xs text-gray-500">© 2026 Debojyoti Khanra</p>

        {/* SOCIALS */}
        <div className="mt-4 flex gap-6 justify-center text-sm">
          <a href="#" className="underline text-[#76869B]">
            GitHub
          </a>
          <a href="#" className="underline text-[#76869B]">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
