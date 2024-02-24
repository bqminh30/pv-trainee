import React from "react";
import bg_main from "../assets/bg_image.jpg";
import icons from "../utils/icons";

const Subscribe = () => {
  const { IoIosSend } = icons;
  return (
    <div className="w-full relative flex justify-center mx-auto">
      <img
        className="h-[450px] w-full object-center mx-auto"
        src={bg_main}
        alt="Background main"
      />
      <div className="xl:w-main flex flex-col absolute h-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <IoIosSend color="white" className="cursor-pointer" size={26} />
          <span className="pt-[10px] font-[500] text-base uppercase text-white">
            subcribe to stay in the loop
          </span>
          <div className="mt-[30px]">
            <form class="flex items-center max-w-lg mx-auto">
              <label for="search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <input
                  type="text"
                  id="search"
                  class="bg-transparent border border-gray-300 text-gray-900 text-sm block w-full ps-1 px-12 py-3 "
                  required
                />
              </div>
              <button
                type="submit"
                class="inline-flex uppercase items-center py-3 px-3 ms-2 text-sm font-medium text-white bg-main border border-main  focus:ring-4 focus:outline-none  "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Subscribe;
