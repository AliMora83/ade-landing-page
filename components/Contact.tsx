"use client";

import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { register, handleSubmit } =
    useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (
    formData
  ) => {
    window.location.href = `mailto:adeoba.mercies@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. Here is my email ${formData.email}`;
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex my-40
    px-10 items-center justify-evenly selection:bg-purple-100 selection:text-gray-100"
    >
      {/* Contact Info */}
      <div>
        <h3 className=" text-gray-500 text-base">
          Contact Information
        </h3>

        <div className="mb-5 ">
          <h2 className="text-xl font-bold">
            Ready to{" "}
            <span className="underline decoration-purple-100">
              start
            </span>
            ? contact me
          </h2>
        </div>

        <div className="space-y-3 text-gray-400">
          <a
            href="https://api.whatsapp.com/send/?phone=2348142064130&text=Hello%2C+Mr+Adeobajesu.+I+got+your+contact+from+LinkedIn+and+I%27ll+love+to+have+a+conversation+with+you.%0A%0AMy+name+is+........+&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex space-x-5">
              <PhoneIcon className="text-purple-100 h-5 w-5 animate-pulse" />
              <p className="text-sm md:text-base">
                +234 814 206 4130
              </p>
            </div>
          </a>

          <div className="flex space-x-5">
            <EnvelopeIcon className="text-purple-100 h-5 w-5 animate-pulse" />
            <p className="text-sm md:text-base">
              adeoba.mercies@gmail.com
            </p>
          </div>
          <div className="flex space-x-5">
            <MapPinIcon className="text-purple-100 h-5 w-5 animate-pulse" />
            <p className="text-sm md:text-base">
              Lagos, Nigeria - Remote
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full md:w-fit mx-auto"
          target="_blank"
        >
          <div className="md:flex md:space-x-2">
            <input
              {...register("name")}
              placeholder="name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-purple-100 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
