export default function Home() {
  return (
    <main className="container px-12 py-24 font-sans mx-auto max-w-5xl w-full flex flex-col">
      <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-9">
        Categories
      </h2>
      <div className="flex flex-wrap mb-[64px]">(categories go here)</div>
      <section className="mr-16">
        <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-7">
          Latest and Greatest
        </h2>
        <div className="grid grid-cols-1 gap-1 grid-flow-row">Post list</div>
      </section>
    </main>
  );
}
