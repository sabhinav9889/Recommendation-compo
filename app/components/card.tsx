"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
const Card = ()=> {
    const heading = "Project Management VS Product Management";
  const desc =
    "To display a larger size To display font-boldfont-bold font-bold a larger size font-bold a larger size font-bold a larger size font-bold a larger size font-bold a larger size font-bold size font-bold a larger size font-bold larger size font-bold a larger size font-bold a larger size font-bold size font-bold a larger size font-bold";
  const ownership = "Project Management Influencing Team [Owner]";
  const discussion = 0;
  const lastActivity = "07 Nov";
  const lastTopicName =
    "What do you think <p className= do you think do you think";
  const memberSize = 13;
  const isLock = false;
  const [desbutt, setdesbutt] = useState(true);
  const [readmore, setReadmore] = useState<Boolean>(true);
  const divRef = useRef(null);
  useEffect(() => {
    const divElement = divRef.current;
    if (divElement&&divElement.scrollHeight < 80) {
      setdesbutt(false);
    }
  }, []);
    return(
        <div className="flex  justify-center items-center mb-2">
        <div className="border w-3/4 bg-white rounded-md hover:drop-shadow-md drop-shadow-none">
          <div className="grid xl:grid-cols-3 grid-cols-2 pt-4 p-2">
            <div className="grid grid-cols-4 col-span-2">
              <div className="col-span-4 lg:col-span-1">
                <div className="flex justify-center">
                  <div className="flex w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/images.jpeg"
                      alt="Example image"
                      width={200}
                      height={100}
                    ></Image>
                    <div className="p-2 h-9 bg-red-300 text-white w-9 absolute z-10 rounded-full mt-20 ml-24">
                      {(isLock)?<FontAwesomeIcon className="ml-1/2" icon={faLock} size="lg" />:<FontAwesomeIcon className="" icon={faLockOpen} size={"lg"} />}
                   </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 col-span-4" style={{fontSize: '15px'}}>
                <p
                  className="p-2 text-base lg:text-lg xl:text-xl font-semibold flex justify-center lg:block text-black hover:text-blue-300 cursor-pointer"
                >
                  {heading}
                </p>
                <div style={{ color: "#303030"}}>
                {readmore ? (
                  <div style={{ color: "#303030"}}>
                    <p
                      className="p-2 h-auto max-h-20 overflow-hidden"
                      ref={divRef}
                    >
                      {desc}
                    </p>
                    {desbutt && (
                      <button
                        className="text-blue-400 ml-2"
                        onClick={() => setReadmore(false)}
                      >
                        Read more
                      </button>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "#303030"}}>
                    <p className="p-2" ref={divRef}>
                      {desc}
                    </p>
                    {desbutt && (
                      <button
                        className="text-blue-400 ml-2"
                        onClick={() => setReadmore(true)}
                      >
                        Read Less
                      </button>
                    )}
                  </div>
                )}
                  </div>
              </div>
            </div>
            <div
              className="border-l xl:col-span-1 col-span-2"
              style={{ color: "#303030", fontSize: '15px' }}
            >
            <hr className="xl:hidden"/>
              <div className="sm:grid sm:grid-cols-7 sm:border-r xl:border-none">
                <div className="border-r col-span-2">
                  <p className=" flex justify-center items-center">
                    Discussion
                  </p>
                  <p className="font-bold  pt-2 text-xl  flex justify-center items-center">
                    {discussion}
                  </p>
                </div>
                <hr className="sm:hidden"/>
                <div className="pl-1 col-span-3">
                  <hr className="sm:hidden"/>
                  <div className="border-r sm:border-none col-span-2">
                    <p className="flex justify-center text-md items-center">
                        Last Activity
                    </p>
                    <p className="font-bold pt-2 text-xl flex justify-center items-center">
                        {lastActivity}
                    </p>
                   </div>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="ml-2 mr-2 w-full mt-2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;