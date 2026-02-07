import React from 'react'
import ProjectCart from "../components/Project.jsx"

const Project = () => {
  return (
    <section className='font-inter max-w-360  mx-auto px-4 pb-40 bg-[url(./hero.svg)] bg-no-repeat' >
      <h1 className='text-2xl font-bold text-center mb-15 underline pt-20'>Projects</h1>
      <main className='mx-auto flex justify-center items-center flex-wrap gap-10'>
       <ProjectCart />
      </main>
    </section>
  )
}

export default Project