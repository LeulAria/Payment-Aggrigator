import React, { useState } from 'react'

const Announcement = () => {
  const [show, setShow] = useState(true);

  const handleCloseAnnouncement = () => {
    setShow(false)
  }

  return (
    show ?
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-100 dark:bg-zinc-800/60 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
          <p className="text-sm leading-6 dark:text-gray-200">
            <strong className="font-semibold">New Announcment</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Get exclusive discount starting from June - September
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-600 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button onClick={handleCloseAnnouncement} type="button" className="flex items-center justify-center -m-3 mr-10 focus-visible:outline-offset-[-4px] border dark:border-[#333] hover:bg-[#DDD] dark:hover:bg-[#444] p-1 w-7 h-7 rounded-full">
            <span className="sr-only">Dismiss</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-white w-6 h-6" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>
          </button>
        </div>
      </div> : null
  )
}

export default Announcement