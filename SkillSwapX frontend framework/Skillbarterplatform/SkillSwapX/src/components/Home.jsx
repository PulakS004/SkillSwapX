import React from 'react';
import { Link } from 'react-router-dom';
const testimonials = [
      {
        name: "James Smith",
        role: "Guitarist",
        image: "https://storage.googleapis.com/a1aa/image/OzfUYPGM0AGK1om1r7ZKqJ963Q4andIQrEYaVE4DnLc.jpg",
        text: "estas vel praesent auctor dolor. Et proin dolor rhoncus sit.",
        rating: 5
      },
      {
        name: "Rachel Lee",
        role: "Graphic Designer",
        image: "https://storage.googleapis.com/a1aa/image/5hEkGF91eRYdQTqxHztCkeSzlwnj7Q9CUbSisO1yl0U.jpg",
        text: "Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "Digital marketing",
        image: "https://storage.googleapis.com/a1aa/image/PZPuC0HyYrO1EnLkTBIeADba4_OwNAKPWGJzHsIBwMY.jpg",
        text: "Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit.",
        rating: 5
      }
    ];
const Home = ()=> {
  return (
    <div>
    <div className="bg-white text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center p-6">
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Company Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="ml-2 text-2xl font-bold">Swyft</span>
        </div>
        <nav className="space-x-6 text-lg">
          <Link to="/" className="text-pink-600">Home</Link>
          <a href="#Services">Services</a>
          <a href="#reviews">Reviews</a>
          <Link to="/">Contact</Link>
          <Link to="/signup" className="bg-pink-200 text-pink-600 px-4 py-2 rounded-full">Get Started</Link>
        </nav>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
        <div className="md:w-1/2">
          <p className="text-pink-600 font-bold mb-2">Swyft-Right partners for mutual learning</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            A Barter Based Skill Exhange PLatform
          </h1>
          <p className="text-gray-600 mb-6">
          Instead of monetary transactions, users can offer their expertise in one area to learn a new skill in return, fostering a collaborative and growth-oriented community. Whether it’s coding for design, marketing for content writing, or language learning for business skills
          </p>
          <div className="flex space-x-4">
            <Link to="/signup" className="bg-pink-200 text-pink-600 px-6 py-3 rounded-full">Get Started</Link>
            <Link to="/how-it-works" className="text-gray-600">How It Works?</Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-6 md:mt-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full -z-10"></div>
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bed873f3-a588-4fe3-9c9e-0f1d87335745.png"
            alt="Smiling woman learning skills"
            className="h-100 w-auto"
          />
        </div>
      </main>
      <aside className="flex flex-col items-center md:items-start md:flex-row md:justify-between p-6 md:p-12">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-900">10K +</h2>
          <p className="text-gray-600">Skills learned</p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-gray-900">126 +</h2>
          <p className="text-gray-600">People connected</p>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">99 %</h2>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
      </aside>
    </div>
    <div id="Services">
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-x1 hover:-translate-y-2">
            <div className="bg-pink-100 p-4 rounded-full inline-block mb-4">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c01e8124-5d4a-4424-850e-af32064fe577.png"
                alt="Icon representing flexible scheduling"
                className="mx-auto rounded-full "
                width="70"
                height="70"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Skill Listing and Discovery</h3>
            <p className="text-gray-600">
            Allows users to list the skills they can offer (e.g., web development, painting, yoga training) and the skills they want in return.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-x1 hover:-translate-y-2">
            <div className="bg-pink-100 p-4 rounded-full inline-block mb-4">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d503ae6-94fb-4bbb-95a5-56c38da6761f.png"
                alt="Icon representing professional staff"
                className="mx-auto rounded-full"
                width="70"
                height="70"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Matchmaking and Barter Negotiation</h3>
            <p className="text-gray-600">
            Smart algorithm that finds ideal barter matches (e.g., someone who teaches Spanish and wants graphic design help).
            In-app messaging or chat to discuss the terms of exchange, duration, and value equivalence.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-x1 hover:-translate-y-2">
            <div className="bg-pink-100 p-4 rounded-full inline-block mb-4">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d042f473-986f-4906-8569-7285bd4f2cf5.png"
                alt="Icon representing competitive pricing"
                className="mx-auto rounded-full"
                width="70"
                height="70"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Skill Exchange Execution and Trust system</h3>
            <p className="text-gray-600">
            Enables users to track, verify, and rate the skill exchange to ensure fair and successful interactions.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
     <div id="reviews" className="bg-white text-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <div className="text-purple-600 text-sm font-semibold tracking-wide uppercase mb-2">
                <i className="fas fa-pen-nib"></i> Testimonial
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hear What Our Users Say</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Faucibus commodo aenean et sit quisque ipsum. Consequat eu id ut dolor felis quis. Sagittis a sapien pulvinar etiam.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="text-orange-500">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={testimonial.image}
                      alt={`Portrait of ${testimonial.name}`}
                    />
                    <div>
                      <p className="text-gray-900 font-bold">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-500">Trusted by 50k+ People</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;