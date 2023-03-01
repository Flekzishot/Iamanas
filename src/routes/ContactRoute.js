import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

function ContactRoute() {
  React.useEffect(() => {
    document.title = "Anas A - Contact and more";
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
            <Header>
              Contact me
            </Header>
            <Paragraph>
              The best way of getting in contact with me is via E-Mail:{" "}
              <a
                className="custom-purple-color"
                href="mailto:contact@iamanas.dev"
              >
                contact@iamanas.dev
              </a>
              .
            </Paragraph>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactRoute;
