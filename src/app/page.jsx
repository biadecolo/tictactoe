import Game from './game';
import Image from 'next/image';
import DarkModeSwitch from './DarkModeSwitch'; 

export default function Home() {
  return (
    <>
      <main className="relative grid grid-cols-1 md:grid-cols-3 gap-4 pt-20 bg-[url(/bg.png)] bg-cover bg-no-repeat bg-center min-h-screen dark:bg-gray-800">
        <div className="absolute right-4 top-4 z-10">
          <DarkModeSwitch />
        </div>
        <div></div>
        <div className="justify-center flex flex-col items-center">
          <div className="hidden dark:block">
            <Image src="/tictacwht.gif" width={80} height={80} alt='A TicTacToe board.' />
          </div>
          <div className="dark:hidden">
            <Image src="/tictac.gif" width={80} height={80} alt='A TicTacToe board.' />
          </div>
          <br />
          <h1 className='text-3xl font-sans underline decoration-indigo-500 dark:text-white'>Tic-tac-toe for <span className='bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-100'> AdTrak</span></h1> 
          <br />
          <p className='text-md font-sans dark:text-white '>
            Hiya! I'm Bianca Decoló and this is a brief test to showcase some of my Tailwind/React/Next habilities for <span  className='underline decoration-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-100'>Virtustant</span> and <span className='underline decoration-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-100'>AdTrak</span> visualization.
          </p>
          <br />
          <Game />
          <p className='text-md font-sans mt-5 mb-20 dark:text-white'>
            This is a short project I made in a span of 1 day to showcase some of my habilities in the desired languages for the position.
            It's <b>responsive, visually appealing and functional!</b> Try playing a bit :)
          </p>
          <footer className="w-full flex justify-between items-center text-sm text-gray-500 px-6 py-3 h-16 mt-8 rounded dark:text-white">
            <span><a className="text-indigo-800 dark:text-indigo-100" href="https://adtrak.us/" target='_blank'>AdTrak</a> Test</span> 
            <span>
              Made with ❤️ by <a className="text-indigo-800 dark:text-indigo-100" href="https://biancadecolo.com.br/">Bianca Decoló</a>
            </span>
          </footer>
        </div>
        <div></div>
      </main>
    </>
  );
}