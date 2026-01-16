import React from "react";

const App = () => {
  return (
    <main className="bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="hero-title text-6xl md:text-7xl font-semibold tracking-tight">
            Every product starts as an idea.
          </h1>
          <p className="mt-6 text-2xl md:text-3xl text-neutral-400">
            And survives only through execution.
          </p>
        </div>
      </section>

      {/* CONTRAST */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-5xl md:text-6xl text-neutral-300">
            Ideas are easy.
          </h2>
          <h2 className="section-title text-5xl md:text-6xl text-neutral-500 mt-2">
            Execution is hard.
          </h2>

          <p className="mt-16 text-2xl md:text-3xl text-neutral-400 leading-snug">
            Most ideas fail not because they are bad,
            <br />
            but because they are never brought to life properly.
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
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl text-neutral-300">
            Then clarity begins to form.
          </h2>
          <h2 className="mt-4 text-5xl md:text-6xl text-[var(--accent)]">
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
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-neutral-300">
            Interaction is not decoration.
          </h2>
          <p className="mt-4 text-2xl text-neutral-400">It’s communication.</p>
        </div>
      </section>

      {/* CLOSURE */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-5xl md:text-6xl text-neutral-300">
          This is how experiences are built.
        </h2>
        <p className="mt-6 text-2xl text-neutral-400 max-w-2xl">
          Designed with intention. Animated with purpose.
        </p>
      </section>
    </main>
  );
};

export default App;
