"use client";

import Link from "next/link";

// interface Props {
//   showHome?: boolean;
// }

const links = [
  { name: "Home", href: "/" },
  { name: "Coupons", href: "/coupons" },
  { name: "Specials", href: "/specials" },
  { name: "Order", href: "/" },
];

const NavLinks = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 md:gap-8">
      {links.map((link) => {
        //if (showHome || (!showHome && link.name !== "Home")) {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="md:text-md flex grow items-center justify-center gap-2 rounded-sm bg-red-800 p-1.5 text-sm hover:bg-red-300 hover:text-white-950 md:p-3 lg:text-lg"
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
