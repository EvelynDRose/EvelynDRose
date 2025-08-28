import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  // profile slideshow
  const profileImages = [
    "imgs/self/vex.png",
    "imgs/self/award.png",
    "imgs/self/grad.png",
    "imgs/self/cappy.png",
  ];

  // personal slideshow
  const personalImages = [
    "imgs/self/cappyyoshi.png",
    "imgs/self/henge.png",
    "imgs/self/italy.png",
    "imgs/self/paris.png",
    "imgs/self/japan.png",
    "imgs/self/rope.png",
    "imgs/self/phili.png",
    "imgs/self/horse.png"
  ];


  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left column - intro */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Hi! I’m Evelyn Rose, a recent Master’s graduate in Artificial Intelligence from UTSA with 4 years of research experience. My work spans reinforcement learning, computer vision, and robotics. I have experience prototyping telepresence robots for K–12 education and developing AI algorithms that adapt to real-world challenges. I am passionate about building intelligent systems that see, learn, and interact with the world in meaningful ways.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Experience in Reinforcement Learning, Robotics, and Computer Vision. I've also puglished papers and presented at conferences on RL.
          </p>

          {/* Button to reveal more */}
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {showMore ? "Hide" : "Get to Know Me More"}
          </button>
        </motion.div>

        {/* Right column - profile slideshow */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-xl inline-block">
            <RevolvingImage images={profileImages} />
          </div>
        </motion.div>
      </div>

      {/* Hidden/expandable section */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-10 items-center overflow-hidden"
          >
            {/* Text */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Outside of research and development, I love exploring new experiences and being creative!
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                <li>🐱 Proud cat parent to two adorable cats, Cappy and Yoshi</li>
                <li>🌍 I love traveling and experiencing new cultures</li>
                <li>🎨 My creative hobbies: crochet, DIY, painting</li>
                <li>✨ I'm always curious and eager to try new things</li>
              </ul>
            </div>
          
            {/* Slideshow */}
            <div className="flex justify-center">
              <div className="rounded-xlinline-block justify-center">
                <RevolvingImage images={personalImages} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Reusable revolving image component
function RevolvingImage({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-100 h-150 relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="About section"
          className="rounded-lg object-cover absolute top-0 left-0 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}