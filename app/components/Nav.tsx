import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Live Shows', href: '/pages/shows', current: false },
  { name: 'Media', href: '/pages/media', current: false },
  { name: 'Podcast', href: 'https://1africa-podcast.vercel.app/', current: false },
  { name: 'Foundation', href: '/pages/foundation', current: false },
  { name: 'Team', href: '/pages/team3', current: false },
  { name: 'About', href: '/pages/about', current: false },
  { name: 'Contact', href: '/pages/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-black">

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-start px-8 justify-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              
              <img
                alt="1AfricaradioTv"
                src="/logo.jpg"
                className="h-8 w-auto"
              />
              <p className='font-extrabold text-xl text-[#a67c00]'> 1AfricaradioTv</p>
              
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <a href='https://wa.me/27789349311?text=Pan%20African%20Radio%20Tv%20Broadcasting%20station%20of%20SouthAfrica'><PhoneIcon aria-hidden="true" className="h-6 w-6 text-white font-extrabold" />+27(0)11 433 0211</a>
             
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="/flag.webp"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="/pages/team3" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Our Team
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/pages/media" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Gallery
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="https://1africa-podcast.vercel.app/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Podcast
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sports
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/pages/contact" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Contact
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        
      </DisclosurePanel>
    </Disclosure>
  )
}
