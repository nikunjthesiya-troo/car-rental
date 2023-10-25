import React from 'react'
import { Link } from 'react-router-dom'

const AccordianMenu = ({ nav }) => {
  return (
    <div class="hs-accordion-group w-full">
      <div class="hs-accordion w-full" id="hs-basic-with-title-and-arrow-stretched-heading-two">
        <div class="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-troo-light transition" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
          {nav?.name}
          <svg class="hs-accordion-active:hidden hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-troo-light" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg class="hs-accordion-active:block hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-troo-light" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
          <div class="px-4 py-3 w-full bg-troo-light bg-opacity-5 rounded-lg mt-3 flex flex-col items-start gap-4">
            {
              nav?.subPages?.map((data, i) => {
                return (
                  <Link to={data?.path}><span class="text-troo-light">{data?.name}</span></Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordianMenu