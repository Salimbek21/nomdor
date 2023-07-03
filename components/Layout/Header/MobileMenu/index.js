import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon } from "@/components/svg";
import Link from "next/link";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Главная",
    href: "/",
  },
  {
    id: 1,
    navTitle: "Филиалы",
    href: "/branches",
  },
  {
    id: 2,
    navTitle: "Vakantlar",
    href: "/vacancy",
  },
  {
    id: 3,
    navTitle: "Контакты",
    href: "/contacts",
  },
 
];

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

   const routeLink =(a)=>{
    a ==false && setMobileNavOpen(false) 
   }

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <>
      <main className="container">
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          <div className="menu-container">
            <motion.div
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}
            >
              <MenuIcon />
            </motion.div>
          </div>
          <motion.div variants={mobileMenuVariant} className="mobile-menu">
            <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
              <MenuIcon />
            </motion.button>
            <motion.ul variants={ulVariant}>
              {MOBILE_NAV_ITEMS.map((navItem) => (
                <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                  <motion.div variants={liVariant}>
                    <Link onClick={()=>routeLink(false)} className="link" href={navItem.href}>{navItem.navTitle}</Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeInVariant} className="contact">
              
              <Link className="link" href={'https://t.me/modagramuz_bot'}>
              <h5>
                {/* @modagramuz_bot */}
              </h5>
              
              </Link>
              {/* <h5>info@modagram.uz</h5> */}
            </motion.div>
          </motion.div>
        </motion.nav>
      </main>
    </>
  );
}
