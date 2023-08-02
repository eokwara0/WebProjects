'server-only'
import dynamic from "next/dynamic";
import Link from "next/link";
const Spacer = dynamic(() => import("../../_spacer"));

export default function RightPart() {
    return <Spacer className=' w-[600px] #bg-green-500 h-5/6 flex  flex-col medium-screen:w-5/6 large-screen:w-4/6 extrasmall:w-5/6 small-screen:w-auto '>
      <div className={" w-full extrasmall:w-auto "}>
        <h1 className=' font-sans text-6xl small-screen:text-4xl font-bold drop-shadow-lg '><span className=" text-sky-400 ">Let&apos;s create</span> something great together.</h1>
      </div>
      <Spacer className='h-10' />
      <div className={'w-5/6 text-slate-400 text-md  extrasmall:w-auto  font-normal leading-relaxed '}>
        <p>The Digital Academy recruits motivated young people with a raw talent for Software Development. They learn practical, hands-on development skills that are needed in the real world.</p>
      </div>
      <Spacer className='h-10' />
      <div className=' w-auto hover:scale-105 transition '>
        <Link href={'#'} className='   font-medium text-slate-100 bg-sky-400 px-3 py-3 w-auto rounded-lg text-center shadow-md '>Partner with us</Link>
      </div>
      {/* <div className='w-4 h-4  bg-rose-600 fixed z-10  rounded-full  right-1/2 top-2/3 '></div> */}
    </Spacer>;
  }
  