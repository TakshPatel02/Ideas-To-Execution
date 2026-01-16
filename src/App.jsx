import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useGSAP(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(".section-title", {
      scrollTrigger: {
        trigger: "#contrast",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
    });

    gsap.from(".tension-line", {
      scrollTrigger: {
        trigger: ".tension-line",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power2.out",
    });

    const clarityT1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#clarity",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });
    clarityT1
      .from(".clarity-line-1", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })
      .from(".clarity-line-2", {
        opacity: 0,
        y: 60,
        duration: 0.8,
      });

    gsap.from(".process-item", {
      scrollTrigger: {
        trigger: ".process-item",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
      opacity: 0,
      x: -40,
      stagger: 0.2,
      duration: 0.8,
    });

    gsap.from(".philosophy", {
      scrollTrigger: {
        trigger: ".philosophy",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1.5,
      },
      opacity: 0,
      duration: 1,
    });

    gsap.from(".closing-title", {
      scrollTrigger: {
        trigger: ".closing",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.5,
      },
      opacity: 0,
      y: 40,
      duration: 1,
    });

    gsap.from(".closing-text", {
      scrollTrigger: {
        trigger: ".closing",
        start: "top 65%",
        end: "bottom 35%",
        scrub: 1.5,
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.2,
    });
  }, []);
  return (
    <main className="bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="hero-title text-6xl md:text-7xl font-semibold tracking-tight">
            Every product starts as an idea.
          </h1>
          <p className="hero-sub mt-6 text-2xl md:text-3xl text-neutral-400">
            And survives only through execution.
          </p>
        </div>
      </section>

      {/* CONTRAST */}
      <section id="contrast" className="py-40 px-6 ">
        <div className="max-w-3xl mx-auto ">
          <h2 className="section-title text-5xl md:text-6xl text-neutral-300">
            Ideas are easy.
          </h2>
          <h2 className="section-title text-5xl md:text-6xl text-neutral-500 mt-2">
            Execution is hard.
          </h2>

          <p className="section-title mt-16 text-2xl md:text-3xl text-neutral-400 leading-snug">
            Most ideas fail not because they are bad,
            <br />
            <span className="section-title">
              but because they are never brought to life properly.
            </span>
          </p>
        </div>
      </section>

      {/* TENSION */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="tension-line opacity-40">Confusion</p>
          <p className="tension-line opacity-60">Overthinking</p>
          <p className="tension-line opacity-70">Too many tools</p>
          <p className="tension-line opacity-90">No direction</p>
        </div>
      </section>

      {/* TRANSITION */}
      <section
        id="clarity"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <h2 className="clarity-line-1 text-5xl md:text-6xl text-neutral-300">
            Then clarity begins to form.
          </h2>
          <h2 className="clarity-line-2 mt-4 text-5xl md:text-6xl text-[var(--accent)]">
            One direction changes everything.
          </h2>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="process-item">Think — Understand the problem deeply.</p>
          <p className="process-item">
            Build — Turn ideas into something real.
          </p>
          <p className="process-item">Refine — Improve what already works.</p>
          <p className="process-item">Polish — Details make the difference.</p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-neutral-300">
            Interaction is not decoration.
          </h2>
          <p className="mt-4 text-2xl text-neutral-400">It’s communication.</p>
        </div>
      </section>

      {/* CLOSURE */}
      <section className="closing min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="closing-title text-5xl md:text-6xl text-neutral-300">
          This is how experiences are built.
        </h2>
        <p className="closing-text mt-6 text-2xl text-neutral-400 max-w-2xl">
          Designed with intention. Animated with purpose.
        </p>
      </section>
    </main>
  );
};

export default App;
