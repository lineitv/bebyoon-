import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#E84E36" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
        <div 
        className='bg-[#F6F6F6]'
        >
          <Component {...pageProps} />
        </div>
    </>
  );
}

export default MyApp
