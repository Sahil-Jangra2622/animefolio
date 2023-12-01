import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sahil Jangra
        </motion.span>
        <div className="social">
          <a href="https://leetcode.com/Sahil_Jangra/" target="_blank" >
          <img src="/leetcode.png" alt="" style={{height:"30px" , width:"30px"}}/>
          </a>
          <a href="https://www.linkedin.com/in/sahil-jangra-13a5b2231/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Sahil-Jangra2622" target="_blank">
            <img src="/git.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
