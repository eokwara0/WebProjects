import Spacer from './(components)/_spacer'
import SidePart from './(components)/_sectionA/_leading/_side';
import RightPart from './(components)/_sectionA/_right/_right_part';

export default function Home() {
  return (
    <main className='#bg-white'>
      <div className=' py-20 columns-2 flex small-screen:w-auto  small-screen:px-0  medium-screen:flex-col medium-screen:flex-wrap justify-center items-center large-screen:flex-col'>
        <RightPart/>
        <Spacer className=' small-screen:h-32 medium-screen:h-32 large-screen:h-32' />
        <SidePart />
      </div>
    </main>
  )
}

