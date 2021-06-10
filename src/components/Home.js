import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="Home">
        <div className="overlay flex flex-col items-center justify-center text-white px-5">
          <h1 className="text-5xl font-bold text-right mb-10 lg:text-center lg:text-7xl lg:px-56">
            I'm a <span className="text-blue-500">Web developer</span> with 
            spacial qualities
          </h1>

          <div className="ml-auto lg:ml-0">
            <Link
              to="/hire"
              className="mr-5 bg-blue-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-blue-800"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="mr-5 bg-white text-blue-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-blue-800 hover:text-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
