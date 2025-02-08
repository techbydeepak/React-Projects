import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl py-10 px-4">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-200 to-yellow-100 rounded-xl overflow-hidden text-black p-10 sm:flex items-center">
        <div className="sm:w-1/2 text-center sm:text-left">
          <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight mb-4">
            Download Now
            <span className="block text-3xl text-orange-800">Your Next Favorite App</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Enjoy seamless access and optimized performance.
          </p>

          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-80 shadow-md"
            to="/"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="mr-2"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Download now
          </Link>
        </div>
        
        <div className="sm:w-1/2 relative">
          <img
            className="w-full max-w-md mx-auto sm:mx-0 sm:ml-auto drop-shadow-xl"
            
            alt="App Preview"
          />
        </div>
      </section>

      {/* Feature Image Section */}
      <div className="grid place-items-center my-16">
        <img
          className="w-72 sm:w-96 drop-shadow-lg rounded-md"
          
          alt="Feature Display"
        />
      </div>

      {/* Footer Heading */}
      <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-gray-800">
        Experience Innovation Like Never Before
      </h1>
    </div>
  );
}

export default Home;
