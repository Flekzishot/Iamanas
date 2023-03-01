import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

function NotFound() {
  React.useEffect(() => {
    document.title = "Anas A - 404";
  }, []);
  return (
    <div className="flex gap-10">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 pr-10 ml-0 md:ml-[240px]"
      >
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden max-w-3xl">
          <div className="flex flex-col flex-1">
            <Header>404 - Not Found!</Header>
            <Paragraph>
              Sorry pal it seems like you've stumbled upon a page that doesn't exist. You can go back to the another page by clicking on any button on the left sidebar. If you think this is a bug, please contact me via E-Mail: <a className="custom-purple-color" href="mailto:contact@iamanas.dev">contact@iamanas.dev</a>
            </Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default NotFound;
