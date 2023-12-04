import Image from "next/image";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row md:mb-20 mb-4">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-3/4">
        <Image
          src="/yoga.png"
          alt="yoga"
          width={200}
          height={200}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <h1
          className="bold-40 lg:bold-74 w-full"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Empower Your Inner Radiance Through Yoga
        </h1>
        <p
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Discover tranquility, strength, and balance with our yoga app. Elevate
          your practice, nurture your mind, and embrace a healthier you. Your
          path to inner harmony starts here
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            102K
            <span className="regular-16 lg:regular-20 ml-1">
              Yogalistic Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_light" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_black_text"
          />
        </div>
      </div>

      <div
        className="hidden md:relative md:flex flex-1 items-start"
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-link px-7 py-8">
          <div className="flex flex-col">
            <p className="regular-16 text-gray-20">Yoga Studio</p>

            <p className="bold-20 text-white">Serenity Space</p>
          </div>

          <div className="flexBetween ">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">
                Mindful Atmosphere
              </p>
              <p className="bold-20 text-white">Zen-like</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
