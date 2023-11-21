import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CreatePaper from '../components/EmptyState'
import EmptyState from '../components/EmptyState'


// const navigation = [
//     {name: 'Dashboard', href: '/'},
//   { name: 'Create Paper', href: '/createpaper', current: false },
//   { name: 'View Papers', href: '#', current: false },
// ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Main() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-md">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                        <a href="/main">
                      <img
                        className="h-8 w-auto"
                        src="https://www.reelo.io/_next/image?url=%2Freelo_new.svg&w=96&q=100"
                        alt="Your Company"
                      /></a>
                    </div>
                    {/* <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-reelobg text-white'
                                : 'text-black-300 hover:bg-reelobg hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div> */}
                  </div>
                  
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    {/* <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-reelobg p-2 text-white hover:bg-reelobg hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button> */}
                  </div>
                </div>
              </div>

              {/* <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-reelobg text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
              </Disclosure.Panel> */}
            </>
             )}
        </Disclosure>
        <main className='flex h-screen items-center justify-center'>
          {/* <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"> */}
            <EmptyState />
            {/* </div> */}
        </main>
      </div>
    </>
  )
}

export default Main