import Image from "next/image";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="flex items-center mt-20 md:mt-0"
      >
        <h2 className="text-text text-xl md:text-4xl">
          <span className="text-neongreen font-fira">04.</span> Testimonials
        </h2>
        <div className="relative !ml-10 h-1 w-60 md:w-96">
          <Image src="/line.svg" alt="line" objectFit="contain" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
