import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { AiOutlineClose, AiOutlineAlignLeft } from "react-icons/ai";
const Sidebar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const items = [
    {
      name: "Who am I",
      link: "/",
    },
    {
      name: "My work",
      link: "/work",
    },
    {
      name: "My skills",
      link: "/skills",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name :"More info",
      link : "/more"
    }
  ];
  return (
    <div>
      <div className="flex py-2 fixed px-5 z-20 blurry-bg place-items-center justify-between md:hidden border-bottom w-full">
  <h1 className="text-lg font-bold text-gray-100">Anas</h1>
        <button
          onClick={toggle}
          className="flex items-center px-3 py-2 rounded text-gray-200 transition-all  hover:text-white "
        >
          {isOpen ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlineAlignLeft className="text-2xl" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="flex mt-10 fixed blurry-bg z-0 flex-col w-screen h-screen flex-1 overflow-y-auto overflow-x-hidden">
          <nav className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 mt-12 ml-8">
              <a
                href="https://www.google.com/maps/place/Agadir+80000"
                className="text-sm font-normal flex mb-5 text-gray-100 hover:text-black transition-all gap-1 place-items-center"
              >
                <ImLocation className="custom-purple-color" /> Morocco, Aga.
              </a>
              {items.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className={`flex items-center h-12  hover:text-white ${
                    window.location.pathname === item.link
                      ? "text-white"
                      : "grey-color"
                  } transition-all `}
                >
                  <span className="font-normal">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
      <div className=" flex-col w-60 h-screen fixed sidebar-border-right md:flex hidden">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <nav className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 mt-12 ml-8">
              <h1 className="text-xl font-bold text-black">Anas A.</h1>
              <a
                href="https://www.google.com/maps/place/Agadir+80000"
                className="text-sm font-normal flex mb-5 text-gray-black hover:text-gray-400 transition-all gap-1 place-items-center"
              >
                <ImLocation className="custom-purple-color" /> Morocco, Aga.
              </a>
              {items.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className={`flex items-center h-12  hover:text-black ${
                    window.location.pathname === item.link
                      ? "text-zinc-800 border-r-gray-300 border-r"
                      : "grey-color"
                  } transition-all `}
                >
                  <span className="font-normal">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
