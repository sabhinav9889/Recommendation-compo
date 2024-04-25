import CardCourses from "./cardCourses";
import CardAsset from './cardAsset';
import CardCommunities from './cardCommunities';
import { useState } from "react";
const Recomm = ()=> {
    const [tab, setTab] = useState<number>(0);
    const assetCount = 42;
    const commuCount = 10;
    const courseCount = 15;
    return(
        <div className="">
            <div className="flex justify-center">
                <div className="sm:flex w-3/4 block cursor-pointer p-2" style={{color:'#88BBD6'}}>
                    <div className={`p-2  ${(tab===0)?'border-l border-r border-t rounded-tl-md rounded-tr-md  bg-white text-black':'hover:border'}`} onClick={()=>setTab(0)}>Assets{'('+assetCount+')'}</div>
                    <div className={`p-2  ${(tab===1)?'border-l border-r border-t rounded-tl-md rounded-tr-md  bg-white text-black':'hover:border'}`} onClick={()=>setTab(1)}>Communities{'('+commuCount+')'}</div>
                    <div className={`p-2  ${(tab===2)?'border-l border-r border-t rounded-tl-md rounded-tr-md bg-white text-black':'hover:border'}`} onClick={()=>setTab(2)}>Courses{'('+courseCount+')'}</div>
                </div>
            </div>
            <CardCommunities tab={tab}/>
        </div>
    )
}

export default Recomm;