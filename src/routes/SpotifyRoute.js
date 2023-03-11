import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

const SpotifyRoute = () => {

  // god forgive me for what i'm about to write
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
</motion.div>
</div>
);

}

export default SpotifyRoute;
