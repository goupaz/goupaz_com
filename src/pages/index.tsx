'use client'
import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'


import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,

} from 'next-share';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
        
        <div className="flex flex-col items-center justify-center gap-4">
      <div>
      <h1 className="text-4xl font-bold">
        
        <p>----------</p>
      </h1>
      <FacebookShareButton
        url={'http://localhost:3000'} >
        <FacebookIcon size={32}  />
      </FacebookShareButton>
      <PinterestShareButton
        url={'http://localhost:3000'} 
        media={'GOUP is all about collaboration and contribution.'}>
        
        <PinterestIcon size={32}  />
      </PinterestShareButton>
      <RedditShareButton
    
        url={'http://localhost:3000'} >
        <RedditIcon size={32}  />
      </RedditShareButton>
      <WhatsappShareButton
  
        url={''} >
        <WhatsappIcon size={32}  />
      </WhatsappShareButton>
      <LinkedinShareButton

        url={'http://linkedin.com/company/goupaz'} >
        <LinkedinIcon size={32}  />
      </LinkedinShareButton>
      <EmailShareButton

        url={'http://localhost:3000'} >
        <EmailIcon size={32}  />
      </EmailShareButton>
      <TwitterShareButton

        url={'http://localhost:3000'} >
        <TwitterIcon size={32}  />
      </TwitterShareButton >
      <h1 className="text-4xl font-bold">----------</h1>
    </div>
    </div>
         
        </div>
        <div className="flex items-center justify-center gap-4"></div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/goup.png"
              alt="GOUP Logo"
              className="dark"
              width={80}
              height={20}
              priority
            />
          </a>
        </div>
      </div>
     
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
      <Image
              src="/banner.png"
              alt="GOUP Logo"
              className="dark"
              width={800}
              height={500}
              priority
            />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/api/events"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Events{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Collaborate with same mindset of people.
          </p>
        </a>

        <a
          href="/api/hiring"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Hiring{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          > Building resume through open source projects.
            
          </p>
        </a>

        <a
          href="/api/gitmade"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Gitmade{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Turning open source project to a company.
          </p>
        </a>

        <a
          href="/api/pipline"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            PIPLine{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Your personalized learning path to become a software engineer.
          </p>
        </a>
      </div>
    </main>
  )
}
