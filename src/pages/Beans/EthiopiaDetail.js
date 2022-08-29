import React, { useEffect } from "react";

const EthiopiaDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-icedrip_bg w-full mt-100">
      <div className="mx-auto  w-full text-center py-16 uppercase bg-detail">
        <h1 className="text-7xl font-bold  text-white">
          ETHIOPIA YIRGACHEFFE{" "}
        </h1>
        <p className="text-3xl font-medium mt-2 text-white">SINGLE ORIGIN</p>
      </div>
      {/* <div className="w-full h-full">
        <img
          src="/bean/ethiDetailBg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="p-24 pb-0">
        <div className=" flex justify-between ">
          <span className="capitalize  text-3xl">Origin</span>
          <span className="uppercase">ethiopia</span>
        </div>
        <div className=" flex justify-between  mt-6 pb-14 border-b-2 border-gray">
          <span className="capitalize  text-3xl">Roast Level</span>
          <ul className="detail-roast-level  border-collapse flex items-center">
            <li className="active">LIGHT</li>
            <li>LIGHT-MEDIUM</li>
            <li>MEDIUM</li>
            <li>MEDIUM-DARK</li>
            <li>DARK</li>
          </ul>
        </div>
        <div className=" mt-14">
          <span className="capitalize  text-3xl">Cupping Notes</span>
          <div className="grid grid-cols-5  text-center detail-cupping-notes mt-14">
            <div className="bg-ethiBg_1 ">
              <span>Fragance</span>
              <br />
              <span>of flowers</span>
            </div>
            <div className="bg-ethiBg_2">
              <span>Sweet</span>
              <br />
              <span>Orange</span>
            </div>
            <div className="bg-ethiBg_3">
              <span>Honey</span>
            </div>
            <div className="bg-ethiBg_4">
              <span>Kumquat</span>
            </div>
            <div className="bg-ethiBg_5">
              <span>Light</span>
              <br />
              <span>Mouthfeel</span>
            </div>
          </div>
        </div>
        <div className="mt-14 font-medium text-xl leading-9 text-justify">
          Ethiopia is known as the origin of coffee and a coffee producer with
          many stories and is famous for its diversity of coffee varieties.
          Yirgacheffe is located in the south of Ethiopia, surrounded by
          mountains and lakes, and feels like Spring year round. The high
          altitude and moderate rain and sunshine form a special micro-climate.
          The floral notes have consistently impressed coffee drinkers, as
          though a flower garden is blooming with every sip. Through the
          meticulous control of the roast profile, this Yirgacheffe has notes of
          jasmine, together with the sweetness of honey and kumquat lingering on
          the palate.
        </div>
      </div>
      <div className="flex flex-col py-24">
        <div className="flex border-2 border-x-0  border-gray w-full items-center gap-24">
          <span className=" -rotate-180 py-28 px-8  uppercase text-transfrom text-2xl tracking-widest border-l-2 border-gray">
            BEANS
          </span>
          <div className="grow grid grid-cols-5">
            <div className="col-span-2">
              <Product
                imgSrc="/bean/ethi_can.png"
                name="ETHIOPIA YIRGACHEFFE"
                weight="200g"
                kind="can"
                price="469.000"
              ></Product>
            </div>
            <div className="col-span-2">
              <Product
                imgSrc="/bean/coffee_bag.png"
                name="ETHIOPIA YIRGACHEFFE"
                weight="200g"
                kind="bag"
                price="429.000"
              ></Product>
            </div>
            <div className="col-span-1 flex">
              <img
                src="/SVG_ICON/arrowontop.svg"
                alt=""
                className="w-24 rotate-90 text-transfrom my-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex border-b-2  border-gray w-full items-center gap-24">
          <span className=" -rotate-180 py-28 px-8  uppercase text-transfrom text-2xl tracking-widest border-l-2 border-gray">
            BEVERAGES
          </span>
          <div className="grow grid grid-cols-5">
            <div className="col-span-2">
              <Product
                imgSrc="/bean/coffee_handcraft.png"
                name="ETHIOPIA YIRGACHEFFE"
                weight="Chemex/ V60/ FrenchPress"
                kind="Handrafted Coffee"
                price="118.000"
              ></Product>
            </div>
            <div className="col-span-2">
              <Product
                imgSrc="/bean/coffee_icedrip.png"
                name="ETHIOPIA YIRGACHEFFE"
                weight="Black"
                kind="Ice Drip Coffee"
                price="98.000"
              ></Product>
            </div>
            <div className="col-span-1 flex">
              <img
                src="/SVG_ICON/arrowontop.svg"
                alt=""
                className="w-24 rotate-90 text-transfrom my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-5xl tracking-widest  text-center  pb-9">
          OTHER BEANS
        </h2>
        <div className="flex items-center justify-evenly pb-36">
          <div className="flex flex-col items-center">
            <div className="h-64">
              <img
                src="/bean/geisha_box.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">FLAME OF GEISHA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-64">
              <img
                src="/bean/aro_can.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">Aromatic Shadow</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-64">
              <img
                src="/bean/ey_can.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">
              ENCHANTING YUNNAN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = ({ imgSrc, name, weight, kind, price }) => {
  return (
    <div className="flex items-center gap-10">
      <img src={imgSrc} alt="" className="w-28 object-cover" />
      <div className="flex flex-col items-start product-detail">
        <span className="uppercase">{name}</span>
        <span>{weight}</span>
        <span className="capitalize">{kind}</span>
        <span className="italic">{price} VND</span>
        <button
          type="button"
          className="py-2 px-5 bg-black text-white uppercase font-bold mt-5 text-base"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default EthiopiaDetail;
