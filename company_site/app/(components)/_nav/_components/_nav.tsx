import {Caveat } from 'next/font/google'
import NavLinks from "./_nav_links";
import Spacer from '../../_spacer';
import Image from 'next/image';
import Link from 'next/link';





const caveat = Caveat(
    {
        display: 'swap',
        subsets: ['latin'],
        weight: '700'
        
}
)


export default function NavBar() {
    return <>
        <nav>
            <div className={" border-b-1 #fixed container flex p-5 "}>
            <Spacer className="w-20 #bg-slate-700 extrasmall:w-0 medium-screen:w-0 large-screen:w-0" />
            <Spacer className="w-20 #bg-slate-500 extrasmall:w-0 medium-screen:w-0"/>
                <div className=" flex company-name p-3 #bg-gray-400 text-3xl text-slate-700">
                    <Link href={'/'}>
                        <Image alt='logo' src={'/logo1.svg'} width='40' height='40' className=''/>
                    </Link>
                    <Spacer className='w-6'/>
                {/* <h2 className={' hover:text-zinc-400 ' + caveat.className}>Obantor</h2> */}
            </div>
                <Spacer className="grow #bg-slate-400 w-20" />
                <NavLinks />
            <Spacer className="w-20 #bg-slate-400 extrasmall:w-0 small-screen:w-0 medium-screen:w-0 "/>
            <Spacer className="w-20 #bg-slate-400 extrasmall:w-0 small-screen:w-0 medium-screen:w-0  large-screen:w-0"/>
            </div>
        </nav>
        <hr className=" mx-36"/>
    </>

    
}