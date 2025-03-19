import Sidebar from "@/components/ui/sidebar";
import Hero from "@/components/sections/hero";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import Footer from "@/components/ui/footer";
export default function Home() {
  return (
    <main className="max-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Sidebar />
      <div className="w-full">
        <Hero />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
