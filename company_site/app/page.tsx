import EmailButton from './(components)/_nav/_components/_email_button';
import Spacer from './(components)/_spacer'
import SidePart from './(components)/leading/_side';
import TwoButton from './(components)/_nav/_components/_two_buttons';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='#bg-white'>
      <div className=' columns-2 py-10 flex small-screen:w-auto  small-screen:px-0  medium-screen:flex-col medium-screen:flex-wrap justify-center items-center large-screen:flex-col'>
        <Spacer className=' w-[600px] #bg-green-500 h-5/6 flex  flex-col medium-screen:w-5/6 large-screen:w-4/6 extrasmall:w-5/6 small-screen:w-auto '>
          <div className={" w-full extrasmall:w-auto "}>
            <h1 className=' font-sans text-6xl small-screen:text-4xl font-bold '>Let&apos;s create something great together.</h1>
          </div>
          <Spacer className='h-6'/>
          <div className={'w-5/6 text-slate-400 text-md  extrasmall:w-auto  font-medium ' }>
            <p>Attract great talent to your open roles to take your business to the next level. Build, promote and manage your jobs with our free to use recruitment software.</p>
          </div>
          <Spacer className='h-9' />
          <div className=' w-auto hover:scale-105 transition '>
          <Link href={'#'} className='   font-medium text-slate-100 bg-sky-400 px-3 py-3 w-auto rounded-lg text-center shadow-md '>Get Started for free </Link>
          </div>
          {/* <div className='w-4 h-4  bg-rose-600 fixed z-10  rounded-full  right-1/2 top-2/3 '></div> */}
        </Spacer>
         {/**Space in between sections */}
        <Spacer className=' small-screen:h-32 medium-screen:h-32 large-screen:h-32' />
        {/**Space in between sections */}
        <SidePart/>

      
      </div>
    </main>
  )
}
