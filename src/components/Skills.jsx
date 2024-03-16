import React from 'react'

const Skills = () => {
    const skillsData = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Git",
        "Tailwind",
        "Bootstrap",
        "Firebase",
        "MongoDB",
        "Redux",
        "Express",
        "C++",
        "Java"
    ]
  return (
   <>
   <div id='skills' className='w-[90%] sm:w-[80%] mx-auto mt-10 mb-8'>
    <div className='w-full md:w-[80%] lg:w-[60%] mx-auto'>
        <h1 className='text-3xl font-bold text-center my-6'>My Skills</h1>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white borderBlack rounded-sm shadow-sm font-semibold px-2 py-2 text-sm"
        >
            {skill}
          </li>
        ))}
      </ul>
    </div>

   </div>
   </>
  )
}

export default Skills