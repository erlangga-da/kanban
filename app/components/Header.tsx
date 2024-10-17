"use client";
import {} from "@headlessui/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
//ini better bikin interface aja
function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[--medium-grey]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-[--medium-grey] data-[focus]:bg-[--light-grey-bg] duration-300"
            >
              Edit Board
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-[--red] data-[focus]:bg-[--light-grey-bg] duration-300"
            >
              Delete Board
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default function Header() {
  return (
    <div className="bg-[--white] border-b border-[--lines-light] px-6 py-4 flex justify-between">
      <h1 className="font-bold text-2xl self-center">Platform Launch</h1>
      <div className="flex items-center gap-4">
        <Button
          label="Add New Task"
          onClick={() => alert("Header")}
          icon={<PlusIcon className="size-6" />}
        />
        <Dropdown />
      </div>
    </div>
  );
}
