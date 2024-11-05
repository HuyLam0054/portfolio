"use client";
import { Home, About, Experience, Projects } from "./components/contents";
// import About from "./components/contents/about";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
