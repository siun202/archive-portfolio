import Image from "next/image";
import { FC } from "react";

const customError: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h2 className="mb-5 text-2xl font-semibold">Why are you here?</h2>

      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <Image
          objectFit="contain"
          width={500}
          height={300}
          src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
          alt=""
        />
      </a>
    </div>
  );
};

export default customError;
