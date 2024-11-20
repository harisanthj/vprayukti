import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventLineUp = () => {
  return (
    <div className="h-[60vh] comingsoon relative flex items-center justify-center py-20">
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="text-center space-y-10">
        <motion.h1
          className="text-xl border-b w-fit mx-auto border-secondary tracking-wide mb-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          EVENTS LINEUP
        </motion.h1>

        <Link to="/events" className="text-base">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            view all events &#x2192;
          </motion.span>
        </Link>
        <motion.h1
          className="md:text-[6vw] text-4xl  font-extrabold tracking-widest glowing-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, type: "spring", stiffness: 100 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          COMING SOON...
        </motion.h1>
      </div>
    </div>
  );
};

export default EventLineUp;
