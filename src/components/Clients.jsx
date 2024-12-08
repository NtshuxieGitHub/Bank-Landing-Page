/* eslint-disable no-unused-vars */
import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#7de7eb",
              transition: { duration: 0.3 },
            }}
            style={{
              borderRadius: "10px",
              padding: "10px",
            }}
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:mi-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
