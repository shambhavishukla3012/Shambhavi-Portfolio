"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     
      <p className="mb-3">
  Hi, I'm Shambhavi! I'm a <span className="font-medium">computer science graduate</span> with a strong foundation in <span className="font-medium">software development and data engineering</span>. My passion lies in solving complex problems through innovative and scalable technological solutions. I bridge the gap between data and application with my expertise in <span className="font-medium">full-stack development, data pipeline management, and database optimization</span>. <span className="italic">My favorite part of programming</span> is leveraging a blend of analytical thinking and creativity to craft efficient and scalable solutions. I <span className="underline">love</span> tackling complex challenges and contributing to cutting-edge projects. My core skills include <span className="font-medium">software development, data engineering, and problem-solving</span>. I am always looking to learn new technologies and advance my skills.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I'm driven by a passion for continuous learning and innovation. I enjoy exploring new technologies and staying up-to-date with the latest trends in software and data engineering. I'm currently seeking a <span className="font-medium">full-time position</span> as a Software Engineer or Data Engineer, where I can leverage my skills to drive meaningful impact in the field of software development.
</p>
    </motion.section>
  );
}
