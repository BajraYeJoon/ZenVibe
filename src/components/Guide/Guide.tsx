import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/yoga.png" alt="camp" width={100} height={100} />
        <p className="uppercase regular-18  -mt-1 mb-3 text-purple-50">
          Embrace Tranquility
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-58 xl:max-w-[450px]">
            Guide You to Inner Harmony
          </h2>
          <p className="regular-16 text-subtitleAccent xl:max-w-[520px]">
            With the Hilink Yoga app, find your path to inner peace. No longer
            wander, as we provide guidance even in the absence of an internet
            connection. Invite your friends and loved ones to experience
            serenity through valleys and reach the pinnacle of mindfulness.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative ">
        <Image
          src="/guide.jpg"
          alt="yoga guide"
          width={1000}
          height={720}
          className="w-full object-contain lg:ml-44 rounded-3xl shadow-md"
        />

        <div className="hidden md:absolute md:flex bg-link py-8 pl-5 pr-7 gap-3 rounded-3xl border border-link shadow-md md:left-[5%] lg:top-20 lg:-left-[2%]">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <p className="regular-16 text-black">Yoga Session</p>

              <p className="bold-20 mt-2 text-white">Serenity Flow</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Starting Point</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap text-white">
                Lotus Valley Retreat
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
