import Image from "next/image";
import { reviewsList } from "./constants";
import ReviewSlider from "./Review/ReviewSlider";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="h4">
              What my Clients are Saying
            </h4>
          </div>
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
}
