import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
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
          <h1 className="text-4xl font-semibold leading-tight tracking-wider text-center text-orange-500 font-nunito ">
            {text}
            <span>
              <Cursor cursorColor="black" />
            </span>
          </h1>
        </div>
      </div>

      {
        <div className="w-1/2">
          <Player
            src="./Assets/Animations/Dev-Animation.json"
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
