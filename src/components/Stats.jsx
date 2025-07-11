import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="bg-[#7c0a02] text-white py-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-60">
        <div className="text-center">
          <p className="text-4xl font-bold">
            <CountUp end={200} duration={1} />
          </p>
          <p className="mt-1">Leaders</p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold">
            <CountUp end={120} duration={1} />
          </p>
          <p className="mt-1">Events</p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold">
            <CountUp end={3} duration={1} />
          </p>
          <p className="mt-1">Running Events</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
