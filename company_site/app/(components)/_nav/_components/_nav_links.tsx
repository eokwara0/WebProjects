'use client'
import { Itim } from "next/font/google";
import Link from "next/link";
import Spacer from "../../_spacer";
import { useState } from "react";
import SolutionMenu from "../_menus/_solution_menu";
import CompanyMenu from "../_menus/_company_menu";


const name = Itim({
    display: 'swap',
    subsets: ['latin'],
    weight : '400'
});

export default function NavLinks() {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl2(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl2);
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose1 = () => {
        setAnchorEl2(null);
    };

    return <div className="#bg-red-700 font-bold small-screen:hidden">
            <SolutionMenu open={open} handleClose={handleClose} anchorEl={anchorEl}/>
            <CompanyMenu open={open1} handleClose={handleClose1} anchorEl={anchorEl2}/>
        <ul className="flex justify-center items-center #bg-gray-950 text-gray-400">
            <li className=" #bg-neutral-500 p-3 font-sans font-semibold " onClick={handleClick}>
                <div className={"text-lg "} >
                    Solutions
                </div>
            </li>
            <li className=" #bg-neutral-500 p-3 font-sans font-semibold ">
                <Link href={"/feature"} className={"text-lg "} >Approach</Link>
            </li>
            <li className=" #bg-neutral-500 p-3 font-sans font-semibold ">
                <div  className={"text-lg "} onClick={handleClick1}>About Us</div>
            </li>
            <li className=" #bg-neutral-500 p-3 font-sans font-semibold ">
                <Link href={"/blog"} className={"text-lg "}>Blog</Link>
            </li>
            <Spacer className="w-4" />
            <li className=" w-auto hover:scale-105 transition ">
                <Link href={"#"} className={" font-medium text-slate-100 bg-sky-400 px-2 py-2 rounded-lg text-center  shadow-md "}>Apply Now</Link>
            </li>
        </ul>
    </div>;
}