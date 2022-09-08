import React from "react";
import GoBackButton from "../Components/GoBack";
import Heading from "../Components/Heading";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <div>
      <GoBackButton name="Go Back" />
      <div className="w-full h-screen">
        <div className="max-w-[1240px] mx-auto w-auto   pb-6">
          <div className="p-6">
            <Heading name="Contacts" />
          </div>
          <div>
            <form action="">
              <div>
                <h1 className="md:hidden font-semibold font-Ubuntu text-[1rem] ml-[1.5rem] mt-[3.5rem]">
                  First Name{" "}
                  <span className="font-bold font-Ubuntu text-green-400">
                    :
                  </span>
                </h1>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="block md:flex font-Ubuntu border py-5 w-[27rem] my-6 rounded-lg px-4 active:border-green-400 mx-auto md:mx-10 mt-[2rem] md:mt-[4rem]"
                    required
                  />
                  <h1 className="hidden md:block font-bold mt-[4.5rem]">
                    <span className="text-green-400 mt-">
                      Note: <br />
                    </span>
                    Please avoid using any vulgar names.
                  </h1>
                </div>
                <h1 className="md:hidden font-semibold font-Ubuntu text-[1rem] ml-[1.5rem] mt-[1rem]">
                  Last Name{" "}
                  <span className="font-bold font-Ubuntu text-green-400">
                    :
                  </span>
                </h1>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="block md:flex font-Ubuntu border py-5 w-[27rem] my-6 rounded-lg px-4 active:border-green-400 mx-auto md:mx-10 mt-[2rem] md:mt-[2rem]"
                  />
                  <h1 className="hidden md:block font-bold mt-[2.5rem]">
                    <span className="text-green-400 mt-">
                      Another Note: <br />
                    </span>
                    Last name of the user is optional.
                  </h1>
                </div>
                <h1 className="md:hidden font-semibold font-Ubuntu text-[1rem] ml-[1.5rem] mt-[1rem]">
                  Coments
                  <span className="font-bold font-Ubuntu text-green-400">
                    :
                  </span>
                </h1>
                <div className="">
                  <textarea
                    placeholder="Enter your thought here"
                    cols={30}
                    rows={10}
                    className="block md:flex font-Ubuntu border py-5 md:w-[72.5rem] w-[27rem] my-6 rounded-lg px-4 active:border-green-400 mx-auto md:mx-10 mt-[2rem] md:mt-[2rem]"
                  ></textarea>
                  <h1 className="font-Ubuntu font-bold text-center mx-4">
                    Please give your active mail-id as we need to inform you
                    about the process.
                  </h1>
                </div>
                <motion.div className="mt-[2rem] text-center">
                  <button className="w-[94%] py-5 rounded-lg font-Ubuntu font-bold text-white bg-green-400">
                    SEND
                  </button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
