export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <section className="text-center max-w-5xl">
        <p className="text-purple-400 mb-4">NovaFrame Studios</p>
        <h1 className="text-6xl md:text-8xl font-bold">We Bring Ideas To Life Through Animation</h1>
        <p className="mt-6 text-xl text-gray-300">Cinematic animation, motion graphics and digital storytelling for modern brands.</p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-purple-600 px-8 py-4">Start A Project</button>
          <button className="rounded-full border border-white px-8 py-4">View Portfolio</button>
        </div>
      </section>
    </main>
  );
}
