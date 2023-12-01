import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface YogProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const YogaTypes = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: YogProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1000px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-3xl `}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 text-primary">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-highlightLight p-4">
            <Image
              src="/pose.svg"
              alt="map"
              width={28}
              height={28}
              data-aos="zoom-in"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-link/90">{title}</h4>
            <p className="regular-14 text-black">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full object-cover object-center"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Yoga = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <YogaTypes
          backgroundImage="bg-bg-img-1"
          title="Zen Retreat Center"
          subtitle="Tranquil Yoga Sanctuary"
          peopleJoined="100+ Yogis"
        />

        <YogaTypes
          backgroundImage="bg-bg-img-2"
          title="Nature's Bliss Yoga Retreat"
          subtitle="Amidst Serene Landscapes"
          peopleJoined="75+ Participants"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-20">
        <div
          className="bg-link p-8 lg:max-w-[300px] xl:max-w-[500px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="regular-24 md:regular-32 capitalize text-white">
            <strong>Discover Your Inner Peace</strong> Through Yoga
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Begin your journey towards tranquility and self-discovery. In a
            world filled with chaos, find solace in the practice of yoga. Let us
            guide you on a path of mindfulness, balance, and well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Yoga;
