import { useGSAP } from "@gsap/react";
import BackgroundGradientAnimation from "../../components/Background-gradient-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeConnect = () => {

    useGSAP(()=>{

        gsap.registerPlugin(ScrollTrigger)

        gsap.to("#HomeConnectDiv", {
          scrollTrigger: { trigger: "#HomeConnectDiv", start:"top top", end:"bottom top", pin:true, markers:true }
        });
        gsap.to("#HomeConnectBackground", {
          scrollTrigger: {
            trigger: "#HomeConnectBackground",
            start: "top top",
            end: "20% top",
            markers: true,
            scrub:true,
            toggleActions:"play none reverse none"
          },
          width:"95%",
          height:"95%"
        });


    })

  return (
    <div
      id="HomeConnectDiv"
      className="w-100% h-screen flex justify-center items-center"
    >
      <div
        id="HomeConnectBackground"
        className="relative w-full h-screen -z-10"
      >
        <BackgroundGradientAnimation>
          <div className="absolute z-[1]  inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <div className="flex w-[30%] h-[10%]">
              <h1 className=" bg-white px-[2vw] flex justify-center items-center rounded-full text-2xl text-black font-normal">
                Let's get Connected
              </h1>
              <h1 className="bg-white hover:font-bold flex min-w-[70px] min-h-[70px] justify-center text-2xl text-black font-normal items-center rounded-full">
                <i className="fa-thin hover:font-bold fa-arrow-right"></i>
              </h1>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
}

export default HomeConnect
