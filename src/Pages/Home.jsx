import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Frontend Web Developer"],
    loop: {},
  });

  return (
    <section className="flex items-center justify-between max-h-screen pt-24 px-96">
      <div className="flex flex-col w-1/2">
        <h1 className="mb-12 text-6xl font-bold leading-tight tracking-wider text-center text-black font-nunito ">
          Hassan <br /> Alabdulal
        </h1>

        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-wider text-center text-black font-nunito ">
            {text}
            <span className="text-red">
              <Cursor cursorColor="red" />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
