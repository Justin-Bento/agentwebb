import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiX, HiMenu } from "react-icons/hi";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Infromation", href: "/information" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="flex flex-col min-h-full shadow">
      <Popover className="relative bg-white">
        <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:p-0">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">AgentWebb</span>
                AW
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <HiMenu className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              {navigation.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Link href="/">
                    <span className="sr-only">AgentWebb</span>
                    AW
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                    <span className="sr-only">Close menu</span>
                    <HiX className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
