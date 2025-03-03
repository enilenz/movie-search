import React from "react";
import Utils from "../utils/utils"

import projector from '../assets/projector.png';

const Showcase = () => {
  return (
    <div>
      <div className="bg-black text-white py-10 mt-12 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-gray-400">
            We’ve got thousands of movies across multiple genres!
          </p>
          <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Utils.genreList().map((brand, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="w-6 h-6rounded-full">✅</span>
                <p className="text-sm font-semibold">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          Harnessing the power of entertainment <br /> for a brighter future
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          We believe watching movies is the answer to the world’s greatest
          challenges. It’s has the power to erase biases and bring people together.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {Utils.testimonials().map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
            >
              <p className="text-sm text-gray-500">
                {card.year} / <span className="font-semibold">Testimonial</span>
              </p>
              <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          We help you identify and   <br /> explore new genres.
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Movies do not recognize age, race or any form of bias. Find something that speaks to who you are, who you were, and who you would like to become.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {Utils.reasons().map((service, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-black text-white p-10 rounded-lg">
          <h3 className="text-2xl font-bold">Tell us what you think!</h3>
          <button className="mt-4 bg-white text-black hover:bg-black hover:text-white px-6 py-2 rounded-lg font-semibold">
            Get in touch
          </button>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Our offices</h4>
            <p className="text-gray-400">Ikoyi, Lagos</p>
            <p className="text-gray-400">Tampa, Florida </p>
            <h4 className="mt-4 text-lg font-semibold">Email</h4>
            <p className="text-gray-400">eni.odubawo@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold">Work</h4>
              <ul className="text-gray-600 text-sm mt-2 space-y-2">
                <li>Github</li>
                <li>Slack</li>
                <li>Azure</li>
                <li>Asset 4</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="text-gray-600 text-sm mt-2 space-y-2">
                <li>About</li>
                <li>Process</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Connect</h4>
              <ul className="text-gray-600 text-sm mt-2 space-y-2">
                <li>Reddit</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Sign up for our chatroom and find others like you.</h4>
            <p className="text-gray-600 text-sm mt-2">
              Subscribe to get access to our discussion forum as well as the latest movie news and releases.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-3 border border-gray-300 rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-3 rounded-r-md">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-6 justify-between px-10">
        <div class='flex flex-row '>
          <img src={projector} width={'38px'} alt=''></img>
          <p class=' italic font-bold text-md pt-1'>Movie-Search.</p>
        </div>
        <p class='text-gray-600'>© Movie Search Inc. 2025</p>
      </div>
    </div>
  );
};

export default Showcase;
