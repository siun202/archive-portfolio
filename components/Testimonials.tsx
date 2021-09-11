import Title from "./Title";
import data from "../public/data.json";

const Testimonials = () => {
  return (
    <div id="testimonials" className="-ml-40">
      <div className="ml-40">
        <Title num={4} title="Testimonials" />
      </div>
      <div className="overflow-hidden flex w-screen mx-auto mt-10 space-x-10">
        {data.testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="bg-darkerblue transform !rotate-45 px-4 pb-3 min-w-[400px] rounded-lg animate-slide"
            style={{ transform: "rotate(90deg)" }}
          >
            <h2 className="mt-5">{testimonial.value}</h2>
            <h2 className="text-white mt-4">{testimonial.name}</h2>
            <h2 className="text-white">{testimonial?.relation}</h2>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Testimonials;
