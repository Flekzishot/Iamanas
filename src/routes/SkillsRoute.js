import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
const skillsArray = [
    
    {
        name: "html",
        type: "Web developpement",
        use: "Litteraly the easiest language a human can learn and use, mainly used for front-end websites, the basic of the basics",
        dotColor: "#913133",
    },
    {
        name: "React",
        type: "Frontend",
        use: "I am currently learning react and using it for my front-end projects.",
        dotColor: "#61dafb",
    },
    {
        name: "Tailwind",
        type: "CSS",
        use: "Tailwind is a very good,light vanilla css replacement.",
        dotColor: "#38bdf8",
    },
    {
        name: "JavaScript",
        type: "Fullstack",
        use: "Mainly used for front-end, currently learning how to use it for back-end projects.",
        dotColor: "#f7df1e",
    },

]


function SkillsRoute() {
    React.useEffect(() => {
        document.title = "Anas A - My skills";
    }, []);
    return (
        <div className="flex gap-10">
            <Sidebar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-20 w-full pr-10 ml-0 md:ml-[240px]"
            >
<div className="flex flex-col w-full flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl font-bold text-black">My skills</h1>
            <h2 className="text-xl font-normal mb-5 text-black mt-5">
              My most used skills and languages
            </h2>
            <div className="flex flex-col">
              {skillsArray.map((item, index) => (
                <a href={item.link} className="mb-5" key={index}>
                      <div className="skill-block">
                  <div className="flex max-h-42 flex-col md:flex-row border rounded-xl">
                    <div className="flex flex-col border-bottom-proj border-right py-10 px-5">
                      <h5 className="text-md font-thin text-black">
                        <code>name</code>
                      </h5>
                      <div className="flex flex-row w-28 items-center">
                        <h1 className="text-lg font-normal text-black mr-2">
                          {item.name}
                        </h1>
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.dotColor }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col border-bottom-proj border-right py-10 px-5">
                      <h5 className="text-md font-thin text-black">
                        <code>type</code>
                      </h5>
                      <div className="flex flex-row w-28 items-center">
                        <h1 className="text-lg font-normal text-black mr-2">
                          {item.type}
                        </h1>
                      </div>
                    </div>
                     <div className="flex flex-col py-10 px-5">
                      <h5 className="text-md font-thin text-black"><code>use</code></h5>
                      <h1 className="text-lg font-normal text-black">{item.use}</h1>
                      </div>
                       </div>
                       </div>
                      </a>
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

export default SkillsRoute;
