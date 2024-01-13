import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Frontend Web Developer"],
    loop: {},
  });

  return (
    <section className="flex items-center justify-between max-h-screen pt-24 px-96 bg-[#0d0a0a]">
      <div className="flex flex-col w-1/2">
        <h1 className="mb-12 text-6xl font-bold leading-tight tracking-wider text-center text-[#008080] font-nunito ">
          Hassan <br /> Alabdulal
        </h1>

        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-wider text-center text-[#fafaf9] font-nunito ">
            {text}
            <span>
              <Cursor cursorColor="#fafaf9" />
            </span>
          </h1>
        </div>
      </div>

      {
        <div className="w-1/2">
          <Player
            src="./Assets/Animations/Developer-Animation.json"
            background="transparent"
            speed="1"
            style={{ width: "500px", height: "500px" }}
            loop
            autoplay
          />
        </div>
      }
    </section>
  );
}
