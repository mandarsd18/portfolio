import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="w-[90%] sm:w-[80%] mx-auto mt-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-lg font-semibold">Hi , I'm Mandar Deshmukh</p>
          <p className="text-center  w-full sm:w-[60%] lg:w-[45%] text-xs sm:text-sm font-semibold">
            <p className="mb-2">Hey, I'm Mandar Deshmukh, and I'm on a mission to create remarkable digital experiences. I've fine-tuned my craft to blend creativity with functionality.</p>
            <p className="mb-2">
            My journey into web development began with a spark of curiosity, and since then, I've delved into a diverse array of technologies. From mastering front-end frameworks like React and Next.js to diving deep into the intricacies of back-end systems like Node.js and Express.js, I'm continuously expanding my toolkit.
            </p>
    
            <p className="mb-2">
            But beyond the code, I'm an avid learner and a relentless explorer. I'm constantly seeking inspiration from the world around me, whether it's through hiking in nature, experimenting in the kitchen, or diving into a new book.
            </p>
            <p className="mb-2">
            So, why work with me? Because I'm not just a developer – I'm a partner invested in your success. Together, let's embark on a journey to create something truly extraordinary.
            </p>
            <p>
            Ready to bring your vision to life? Let's chat!
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
