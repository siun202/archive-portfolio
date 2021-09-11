import Image from "next/image";

interface TitleProps {
  num: number;
  title: string;
}

const Title: React.FC<TitleProps> = ({ num, title }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="flex mt-20"
    >
      <h2 className="text-4xl text-text">
        <span className="text-neongreen font-fira">0{num}.</span> {title}
      </h2>
      <Image
        className="!ml-10"
        src="/line.svg"
        alt="line"
        height={1}
        objectFit="contain"
        width={400}
      />
    </div>
  );
};

export default Title;
