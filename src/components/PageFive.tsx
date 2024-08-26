import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

const heading = "Page Five"
const text =
  "🌐✨ Transform your web content using Framer Motion's UTF-16 powered text animations. Each character, a vibrant performer, dances dynamically, weaving a captivating narrative. Elevate user engagement with the art of animated storytelling. 🚀🎉 #WebDev #Animation";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const PageFive = (props: Props) => {
  const headingChars = splitStringUsingRegex(heading);
  const textChars = splitStringUsingRegex(text);
  
  return (
    <div>
      <h1>
        {
          headingChars.map((char) => (
            <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={charVariants}
            >
              {char}
            </motion.span>
          ))
        }
      </h1>
			<p>
        {
          textChars.map((char) => (
            <motion.span
            key={char}
            transition={{ duration: 0.5 }}
            variants={charVariants}
            >
              {char}
            </motion.span>
          ))
        }
      </p>
    </div>
  )
}

export default PageFive