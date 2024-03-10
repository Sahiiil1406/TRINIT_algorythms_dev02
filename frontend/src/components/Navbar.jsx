import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { PopoverTrigger, PopoverContent, Popover } from "./ui/popover";

export default function Navbar() {
  const authenticated = true;
  return (
    <header className="flex items-center h-16 px-4 border-b w-full shrink-0 md:px-6 fixed top-0 left-0 bg-white z-30">
      <Link className="hidden sm:flex" to="#">
        <SunIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="flex-1 min-w-0 ml-4">
        <Link className="font-semibold text-green-700 text-xl " to="#">
          LinguaConnect
        </Link>
      </nav>
      <div className="items-center hidden space-x-4 md:flex">
        {authenticated ? (
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="rounded-[30px] w-10 h-10 border-2 border-gray-100 border-gray-950 dark:border-gray-950"
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height={40}
                    placeholder="empty"
                    src="https://robohash.org/text.png"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-4 mr-4 space-y-4">
                <div className="flex items-center space-x-2 ">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height={40}
                    placeholder="empty"
                    src="https://robohash.org/text.png"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div className="space-y-1 leading-none">
                    <div className="font-semibold">teacher</div>
                    <div className="text-xs leading-none text-gray-500 dark:text-gray-400">
                      teacher@gmail.com
                    </div>
                  </div>
                </div>
                <Link
                  className="block w-full rounded-md bg-gray-100 px-3 py-2 text-sm font-medium
                transition-colors hover:bg-gray-100/70 focus:bg-gray-100/70
                dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
                  to="/profile"
                >
                  View Profile
                </Link>
                <Link
                  className="block w-full rounded-md bg-red-100 px-3 py-2 text-sm font-medium
                transition-colors hover:bg-red-100/70 focus:bg-red-100/70 text-red-800
                dark:bg-red-800 dark:hover:bg-red-800/50 dark:focus:bg-gray-800/50"
                  to="#"
                >
                  Logout
                </Link>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Link
            className="block w-full rounded-md bg-gray-100 px-3 py-2 text-sm font-medium
                transition-colors hover:bg-gray-100/70 focus:bg-gray-100/70
                dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:focus:bg-gray-800/50"
            to="#"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
