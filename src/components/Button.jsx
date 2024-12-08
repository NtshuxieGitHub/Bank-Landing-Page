/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Button = ({ styles }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </motion.button>
  );
};

export default Button;
