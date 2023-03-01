import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

function MoreRoute() {
    React.useEffect(() => {
      document.title = "Anas A - More Information";
    }, []);
  
    return (
      <div className="flex gap-10">
        <Sidebar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-20 pr-10 ml-0 md:ml-[240px]"
        >
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden max-w-3xl">
            <div className="flex flex-col flex-1">
              <Header className ="text-xl font-bold text-gray-100">
                More info
              </Header>
              <Header>
                Why do i code?
              </Header>
              <Paragraph>
              One of the many reasons is -  Problem-solving: Coding can be a way to solve complex problems 
              and create solutions that can improve people's lives and/or make work more efficient.
              and i enjoy it as a hobby.
              </Paragraph>
              <Paragraph>
              I dont know what else to add to this website you can give me ideas by contacting  me via E-Mail:{" "}
              <a
                className="custom-purple-color"
                href="mailto:contact@iamanas.dev"
              >
                contact@iamanas.dev
              </a>
              .
            </Paragraph>
            <Paragraph>
              Or Dm me in discord - a.axlr#1543
              </Paragraph>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
  
  export default MoreRoute;
  