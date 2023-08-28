import Image from "next/image";
import { reviewsList } from "./constants";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h4 className="h4 mb-4">
              What my Clients are Saying
            </h4>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {reviewsList.map((review, index) => (
              <div
                key={index}
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={review.img}
                      width={48}
                      height={48}
                      alt={`Testimonial ${
                        index + 1
                      }`}
                    />
                    <svg
                      className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-orange-500"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-base text-gray-400 grow">
                  {review.review}
                </blockquote>
                <div className="text-gray-700 mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic font-bold">
                    {review.name}
                  </cite>
                  <p className="text-slate-400 text-xs">
                    {review.more}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
