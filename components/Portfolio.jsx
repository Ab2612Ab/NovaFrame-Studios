export default function Portfolio(){
 const projects=['Cosmic Worlds','Future Motion','Brand Stories','Character Universe'];
 return <section className="bg-zinc-950 text-white py-20 px-6"><h2 className="text-4xl font-bold text-center">Featured Works</h2><div className="grid md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">{projects.map(p=><article key={p} className="h-64 rounded-3xl bg-gradient-to-br from-purple-700 to-blue-700 p-6 flex items-end"><h3 className="text-xl font-bold">{p}</h3></article>)}</div></section>
}