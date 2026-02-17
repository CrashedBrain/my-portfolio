import ScrollyCanvas from "@/app/components/ScrollyCanvas"; // Ensure correct relative path or alias
import Projects from "@/app/components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen text-white">
      {/* 
        Container for the entire scroll experience. 
        ScrollyCanvas handles the scroll height (500vh) internally.
      */}
      <ScrollyCanvas />

      <About />
      <Experience />

      {/* 
        Projects section appears after the scroll sequence.
        Using a simple spacer or direct placement.
      */}
      <Projects />
      <Contact />


      {/* Footer */}
      <footer className="w-full py-10 flex flex-col items-center justify-center text-gray-500 text-sm">
        <p>© Prince's Portfolio. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
