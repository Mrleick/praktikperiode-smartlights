import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Nav from "../components/nav";
import Rooms from "../templates/rooms";
import Controls from "../templates/controls";

function Startpage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <>
      <Nav />
      <motion.div initial={{ y: 100, opacity: 0 }} animate={controls}>
        <Rooms />
      </motion.div>
      <Controls />
    </>
  );
}

export default Startpage;
