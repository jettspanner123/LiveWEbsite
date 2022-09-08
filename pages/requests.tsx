import React from "react";
import GoBackButton from "../Components/GoBack";
import Heading from "../Components/Heading";
import { motion } from "framer-motion";
const RequestPage = () => {
  return (
    <div>
      <GoBackButton name="Go Back" />
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-screen "
      >
        <div className="max-w-[1240px] mx-auto w-auto pb-6 h-auto  overflow-y-scroll">
          <div className="p-6">
            <Heading name="Requests" />
          </div>
          <motion.div className="text-center md:text-left ml-[1rem]">
            <h1 className="font-Ubuntu font-bold text-[2.5rem] mt-[5rem]">
              Overview <span className="text-green-400">:</span>
            </h1>
            <p className="text-[1.5rem] md:ml-[7rem] mt-9 font-Ubuntu mr-4 md:mr-0">
              This section of the website allows you to make your custom wear
              with the design you choose.
            </p>
          </motion.div>
          <h1 className="font-Ubuntu text-center font-semibold text-[2rem] md:text-[2rem] lg:[3rem] m-[1rem] mt-[2rem] md:mt-[2rem] underline decoration-green-400 underline-offset-8">
            Enter your credentials
          </h1>
          <form action="">
            <div>
              <h1 className="md:hidden font-semibold font-Ubuntu text-[1rem] ml-[1.5rem] mt-[3.5rem]">
                First Name{" "}
                <span className="font-bold font-Ubuntu text-green-400">:</span>
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
                <span className="font-bold font-Ubuntu text-green-400">:</span>
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
                Mail-Id
                <span className="font-bold font-Ubuntu text-green-400">:</span>
              </h1>
              <div className="">
                <input
                  type="text"
                  placeholder="Email ID"
                  className="block md:flex font-Ubuntu border py-5 w-[27rem] md:w-[35rem] my-6 rounded-lg px-4 active:border-green-400 mx-auto md:mx-10 mt-[2rem] md:mt-[2rem]"
                  required
                />
                <h1 className="font-Ubuntu font-bold text-center mx-4">
                  Please give your active mail-id as we need to inform you about
                  the process.
                </h1>
              </div>
              <motion.div className="mt-[2rem]">
                <input
                  type="file"
                  accept="Image"
                  id="image-input-button"
                  className="w-[94%] ml-7 md:ml-[2.8rem]"
                  required
                  title=""
                />
              </motion.div>
              <motion.button
                type="submit"
                value="submit"
                className="py-6 px-6 rounded-lg text-white font-Ubuntu font-bold bg-black w-[88.5%] ml-7 md:ml-[2.8rem] mt-6 "
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default RequestPage;
