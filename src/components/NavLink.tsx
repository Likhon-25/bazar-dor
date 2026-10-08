"use cache";

import Link from "next/link";


const NavLink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex ">
        {
            data.map((navs) => (
                <Link className="flex gap-3" key={navs.id} href={navs.slug}>
                    
                    <h2>{navs.nameBn}</h2>
                    <span>{navs.icon}</span>
                </Link>
            ))
        }
    </div>
  )
};

export default NavLink;
