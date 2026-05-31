"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

interface BentoGridProps {
  courses: Course[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function BentoGrid({ courses }: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6"
    >
      {/* Hero Tile — spans 2 cols on large screens */}
      <motion.div variants={itemVariants} className="lg:col-span-2">
        <HeroTile />
      </motion.div>

      {/* Activity Tile */}
      <motion.div variants={itemVariants}>
        <ActivityTile />
      </motion.div>

      {/* Course Cards */}
      {courses.map((course, index) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseCard course={course} index={index} />
        </motion.div>
      ))}
    </motion.section>
  );
}
