import React from "react";
import GoBackButton from "../Components/GoBack";
import Heading from "../Components/Heading";
import Card from "../Components/Card";
import FirstImg from "../public/images.png";
import SecondImg from '../public/images/one.jpg'
import ThirdImg from '../public/images/download.jpg'
import FourthImg from '../public/images/two.jpg'
import FifthImg from '../public/images/three.jpg'
import SixthImg from '../public/images/four.jpg'
import SeventhImg from '../public/images/five.jpg'
const Products = () => {
  return (
    <div>
      <GoBackButton name="Go Back" />
      <div className="w-full h-screen">
        <div className="max-w-[1240px] mx-auto w-auto text-center  pb-6">
          <div className="p-6">
            <Heading name="Products" />
          </div>
          <div className="mt-[3rem] grid md:grid-cols-3 ml-[6rem] md:ml-[4rem]  grid-rows-auto gap-6 grid-cols-1 ">
            <Card img={SeventhImg} />
            <Card img={SecondImg} />
            <Card img={ThirdImg} />
            <Card img={FourthImg} />
            <Card img={FifthImg} />
            <Card img={SixthImg} />
            <Card img={SeventhImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
            <Card img={FirstImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
