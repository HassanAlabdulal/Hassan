import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Frontend Web Developer"],
    loop: {},
  });

  return (
    <section className="flex items-center md:justify-between justify-center flex-col md:flex-row max-h-screen md:pt-20 pt-16 md:px-96 bg-[#0d0a0a]">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="md:mb-12 mb-8 md:text-6xl text-4xl font-bold leading-tight tracking-wider text-center text-[#e11d48] font-nunito ">
          Hassan <br /> Alabdulal
        </h1>

        <div>
          <h1 className="md:text-4xl text-2xl w-full font-semibold leading-tight tracking-wider text-center text-[#fafaf9] font-nunito ">
            {text}
            <span>
              <Cursor cursorColor="#fafaf9" />
            </span>
          </h1>
        </div>
      </div>

      {
        <div className="w-full mt-8 md:w-1/2">
          <Player
            className="md:w-[500px] md:h-[500px]"
            src="./Assets/Animations/Developer-Animation.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>
      }
    </section>
  );
}
