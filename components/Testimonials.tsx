import Title from "./Title";
import data from "../public/data.json";

const Testimonials = () => {
  return (
    <div id="testimonials" className="-ml-40">
      <div className="ml-40">
        <Title num={4} title="Testimonials" />
      </div>
      <div className="overflow-hidden flex w-screen mx-auto -mb-10 space-x-10">
        {data.testimonials.map((testimonial, i) => (
          <div key={i} className="animate-slide mt-5">
            <div
              style={{ transform: `rotate(${i + 1 * 2}deg)` }}
              className="bg-darkerblue backdrop-filter shadow-2xl backdrop-blur-xl  px-4 my-10 pb-3 min-w-[400px] rounded-lg"
            >
              <h2 className="pt-5">{testimonial.value}</h2>
              <h2 className="text-white mt-4">{testimonial.name}</h2>
              <h2 className="text-white">{testimonial?.relation}</h2>
            </div>
          </div>
        ))}{" "}
        {data.testimonials.map((testimonial, i) => (
          <div key={i} className="animate-slide  mt-5">
            <div
              style={{ transform: `rotate(${i + 1 * 2}deg)` }}
              className="backdrop-filter backdrop-blur-3xl shadow-2xl border-2 border-darkerblue  bg-white bg-opacity-10  px-4 my-10 pb-3 min-w-[400px] rounded-lg"
            >
              <h2 className="pt-5">{testimonial.value}</h2>
              <h2 className="text-white mt-4">{testimonial.name}</h2>
              <h2 className="text-white">{testimonial?.relation}</h2>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Testimonials;
