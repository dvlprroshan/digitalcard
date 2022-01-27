import type { FunctionComponent, ReactElement } from "react";
import { useState } from "react";
import style from "@/styles/components/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import useWindowSize from "@/utils/hooks/useWindowSize";

const Navbar: FunctionComponent = (): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { width: windowWidth } = useWindowSize();

  windowWidth > 940 && isExpanded && setIsExpanded(false);

  return (
    <nav
      className={`${style.root} ${isExpanded ? style.nav_expanded : ""}`}
      style={{ height: isExpanded ? "200px" : "80px" }}
    >
      <div className={style.nav_handler}>
        <BiMenu
          size={55}
          onClick={(e: any) => setIsExpanded((prev: any) => !prev)}
        />
      </div>
      <div className={style.logo}>
        <Link href="/">
          <a>
            <Image src="/assets/logo.png" alt="Logo" width="168" height="73" />
          </a>
        </Link>
      </div>
      <div className={style.links}>
        <Link href="#">
          <a>Wedding Cards</a>
        </Link>
        <Link href="#">
          <a>Birthday Cards</a>
        </Link>
        <Link href="#">
          <a>Feeling Cards</a>
        </Link>
        <Link href="#">
          <a>Anniversary Cards</a>
        </Link>
      </div>
      <div className={style.account}>
        <Link href="#">
          <a>Login</a>
        </Link>
        {" | "}
        <Link href="#">
          <a>Signup</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
