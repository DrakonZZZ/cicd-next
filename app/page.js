export default function Home() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col md:flex-row justify-start items-center">
        <div className="text-xl uppercase font-extrabold rotate">Drakonz</div>
        <section className="md:w-1/2 m-2 p-4 flex flex-col items-center md:items-start p-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-center">
            GITHUB ACTIONS
          </h1>
          <p className="text-xl text-zinc-500/80 w-4/5">
            GitHub Actions is a continuous integration and continuous delivery
            (CI/CD) platform that allows you to automate your build, test, and
            deployment pipeline. You can create workflows that build and test
            every pull request to your repository, or deploy merged pull
            requests to production.
          </p>
        </section>
        <section className="bg-[#eeeeee] w-full md:h-full flex justify-center items-center p-4 wr">
          <p className=" text-8xl text-zinc-400/40 md:w-1/2 text-center">
            This static site is deployed using github ci/cd pipeline
          </p>
        </section>
        <span>{}</span>
      </main>
    </>
  );
}
