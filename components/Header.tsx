/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                E Market
              </span>
            </div>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/">
                  <p className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-rose-400 md:p-0 dark:text-white cursor-pointer">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-rose-400 md:p-0 dark:text-white cursor-pointer">
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent hover:text-rose-400 md:p-0 dark:text-white cursor-pointer">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              width="40px"
              height="40px"
              className="rounded-full"
              src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
              alt="profile"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
