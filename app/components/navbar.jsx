// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="box bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="https://github.com/DiptajitSaha" target = "_blank"
            className=" bg-gradient-to-r from-yellow-600 to-purple-400 inline-block text-transparent bg-clip-text text-4xl font-bold">
            DIPTAJIT SAHA
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-green-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-red-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-yellow-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;