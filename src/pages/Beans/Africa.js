import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AroDetailCard from "../../components/BeanDetailCards/AroDetailCard";
import EthiDetailCard from "../../components/BeanDetailCards/EthiDetailCard";

const Africa = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [aroCard, setAroCard] = useState(false);
  const [ethiCard, setEthiCard] = useState(false);
  return (
    <div className="container bean-map ">
      <div className="bg-icedrip_bg w-full h-full  p-20 mx-auto">
        <ul className="flex items-center gap-7">
          <NavLink to="/beans/america">
            <li className="font-medium tracking-tight uppercase underline text-xl hover:text-[#df6330]	underline-offset-4 text-gray88 ">
              America
            </li>
          </NavLink>
          <NavLink to="/beans/africa">
            <li className="font-medium africa-active tracking-tight uppercase underline text-xl 	underline-offset-4 text-gray88">
              Africa
            </li>
          </NavLink>
          <NavLink to="/beans/asia">
            <li className="font-medium tracking-tight uppercase underline  text-xl hover:text-[#b1805e]	underline-offset-4 text-gray88">
              Asia
            </li>
          </NavLink>
        </ul>
        <div className="grid grid-cols-4 gap-14 duration-200 ease-linear">
          <div className="col-span-2 ">
            <div className="w-2/4 h-full mx-auto  max-w-md ">
              <img
                src="../bean/africa.png"
                alt=""
                className="w-full h-full object-contain mix-blend-multiply	"
              />
            </div>
          </div>
          <div
            className="col-span-1 cursor-pointer "
            onMouseEnter={() => {
              setAroCard(true);
              setEthiCard(false);
            }}
            onMouseLeave={() => {
              setAroCard(false);
            }}
          >
            {!aroCard ? (
              <div className={`  bg-aro_icedrip p-6 text-white`}>
                <img
                  src="../bean/bean.png"
                  alt=""
                  className="w-full mt-48 mx-auto"
                />
                <p className="mt-40 font-bold text-2xl uppercase">
                  AROMATIC SHADOW
                </p>
                <p className="mt-16">Ethiopia</p>
              </div>
            ) : (
              <AroDetailCard></AroDetailCard>
            )}
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onMouseEnter={() => {
              setEthiCard(true);
              setAroCard(false);
            }}
            onMouseLeave={() => {
              setEthiCard(false);
            }}
          >
            {!ethiCard ? (
              <div className="bg-ethi_icedrip p-6 text-white">
                <img
                  src="../bean/bean.png"
                  alt=""
                  className="w-full mt-48 mx-auto"
                />
                <p className="mt-40 font-bold text-2xl uppercase">
                  ETHIOPIA YIRGACHEFFE
                </p>
                <p className="mt-8">Ethiopia</p>
              </div>
            ) : (
              <EthiDetailCard></EthiDetailCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Africa;
