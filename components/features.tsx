import Image from "next/image";

import Google from "@/public/images/google.png";
import Microsoft from "@/public/images/ms.png";
import Apple from "@/public/images/apple.png";
import Netflix from "@/public/images/netflix.png";



export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Info here</h2>
            <p className="text-xl text-gray-400">More here</p>
          </div> */}

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-md mb-5"
                src={Google}
                width={200}
                height={200}
                alt="google"
              />
            </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-md mb-5"
                src={Microsoft}
                width={200}
                height={200}
                alt="microsoft"
              />
            </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-md mb-5"
                src={Apple}
                width={200}
                height={200}
                alt="apple"
              />
            </div>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-md mb-5"
                src={Netflix}
                width={200}
                height={200}
                alt="netflix"
              />
            </div>
            </div>



          </div>

        </div>
      </div>
    </section>
  )
}
