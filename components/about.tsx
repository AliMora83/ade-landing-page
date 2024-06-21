import Image from "next/image";

import FeatImage01 from "@/public/images/adeoba3.jpeg";

import { tableItems } from "./constants";

export default function About() {
  return (
    <section
      id="about"
      className=" selection:bg-[#0e2844] selection:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
              a brief overview
            </div> */}
            {/* Image */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-md mb-5"
                src={FeatImage01}
                width={200}
                height={200}
                alt="ade image"
              />
            </div>
            <h1 className="h4 mb-4">
              Adeobajesu Aboluwade
            </h1>
            <p className="text-base text-gray-400">
            I help people and businesses <strong>create and grow their online brands </strong>. <br/>
            I know how to use <strong>social media and brand positioning</strong> to your advantage.
            </p>
          </div>

          {/* Items */}
          <div className="">
            {/* Content */}
            <section
              className="flex justify-between flex-col sm:flex-row space-y-10 sm:space-y-0"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              {tableItems.map(
                ({ title, listItem }) => (
                  <div
                    key={title} // Make sure to set a unique key for each item
                    className="md:pr-4 lg:pr-12 xl:pr-16"
                    id="values"
                  >
                    <h3 className="h4 mb-3">
                      {title}
                    </h3>

                    <ul className="text-base text-gray-400">
                      {listItem.map((item) => (
                        <li className="flex items-center">
                          <svg
                            className="w-3 h-3 fill-current mr-2 shrink-0 text-orange-800"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
