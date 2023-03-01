import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";

function MainRoute() {
  React.useEffect(() => {
    document.title = "Anas A. - Who am I";
  }, []);
  return (
    <div className="flex gap-10">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1. }}
        className="py-20 pr-10 ml-0 md:ml-[240px]"
      >
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden max-w-3xl">
          <div className="flex flex-col flex-1">
            <Header>Who am I</Header>
            <Paragraph>
              My name is Anas and I am a 17 year old front-end developer from
              Morocco.
            </Paragraph>
            <Paragraph>
              I started programming when I was 13 my passion for programming never ceased to increase.
              I had to take a very long pause due to a lack of motivation and school along with other occupations.
            </Paragraph>
            <Paragraph>
              I made it my goal to become a fine Fullstack developper and to expand my skillset.
            </Paragraph>
            <Paragraph>
              If you want to contact me, you can do so by visiting my{" "}
              <Link to="/contact" className="custom-purple-color">
                contact page
              </Link>
              .
            </Paragraph>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MainRoute;
