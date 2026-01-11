import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className=" px-10 md:px-20 text-white bg-blue-500 py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">
            <CountUp start={0} end={898} duration={3} />
          </p>
          <p>Expert tutors</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">
            <CountUp end={20000} separator="," suffix="+" duration={3} />
          </p>
          <p>Hours content</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">
            <CountUp end={298} duration={3} />
          </p>
          <p>Subject and courses</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-3xl font-semibold">
            <CountUp end={72878} separator="," suffix="+" duration={3} />
          </p>
          <p>Active students</p>
        </div>

      </div>
    </div>
  );
};

export default NumberCounter;
