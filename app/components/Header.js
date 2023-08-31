import Image from "next/image";
import Link from "next/link";
//import Logo from "../../icons/logo.png";

export default function Navbar() {
  return (
    <header className="py-4 md:py-6 md:px-16 px-6 border-b border-blue-500 bg-white z-30 md:mb-12 mb-8 shadow-md">
  <div className="max-w-6xl mx-auto flex items-center justify-between">
    <nav>
      <ul className="flex items-center gap-x-8 text-lg font-medium">
        {/* Links here */}
        JobPortal
      </ul>
    </nav>
    <nav>
      <ul className="flex items-center gap-x-8 text-lg font-medium ml-auto">
        <li>
          <Link
            href="/about"
            className="text-gray-800 hover:text-blue-500 duration-300 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-gray-800 hover:text-blue-500 duration-300 transition-colors"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  );
}
