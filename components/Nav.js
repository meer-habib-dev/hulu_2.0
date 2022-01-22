import { useRouter } from "next/router";
import requests from "../requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex text-2xl px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h1
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer hover:text-white transition duration-100 transform hover:scale-125 active:text-red-500"
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 " />
    </nav>
  );
};

export default Nav;
