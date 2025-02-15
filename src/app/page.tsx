"use client"
import Hero from "./../components/hero/hero"
import PreLoader from "@/components/other/preloader";
import { VelocityScroll } from "@/components/ui/scrollbassevelocity";
import Aboutus from "@/components/aboutus/aboutus";
import Event from "@/components/events/event";
import { TimelineDemo } from "@/components/timeline/timeline";
import Footer from "@/components/footer/footer";
export default function Home() {
  return (
    <div>
      <PreLoader/>
    <div className="max-h-[110vh]">
      <Hero/>
    </div>
    <Aboutus/>
    <TimelineDemo/>
    <div className="h-screen bg-black">

    <VelocityScroll
      className="font-display text-center text-4xl font-bold -tracking-widest  text-white dark:text-white md:text-7xl md:leading-[5rem]"
      text="UPCOMING EVENT"
      default_velocity={5}
      />
      <Event/>
     {/* <LampContainer>
     <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        CONTACT US
      </motion.h1>
    </LampContainer> */}
    </div>
    <Footer/>
    </div>
  );
}
