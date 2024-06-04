/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { AppData } from "~/const/AppData";
import { cn } from "~/lib/utils";
// import { AppData } from "../../const/AppData";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between p-4 pb-0">
        <NavLink to="/" className="px-3">
          <p className="typo-s36-w700 font-manrope text-primary-main">
            DIARY CMS
          </p>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill="#25314C"
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="pt-9 px-4">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {AppData.dataSideBar?.map((item, index) => {
                if (item?.subMenu) {
                  return (
                    <div key={index}>
                      <SidebarLinkGroup
                        activeCondition={
                          pathname === item?.path ||
                          pathname?.includes(item?.path + "/")
                        }
                      >
                        {(handleClick, open) => {
                          return (
                            <React.Fragment>
                              <NavLink
                                to="#"
                                className={`group relative flex items-center gap-2.5 rounded-3 p-3 duration-300 ease-in-out ${
                                  pathname === item?.path &&
                                  "bg-primary-main_light"
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  sidebarExpanded
                                    ? handleClick()
                                    : setSidebarExpanded(true);
                                }}
                              >
                                {item?.pathIcon ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#25314C"
                                  >
                                    {item?.pathIcon}
                                  </svg>
                                ) : null}

                                <p className="typo-s14-w500 text-ui-textSidebar">
                                  {item?.name}
                                </p>
                                <svg
                                  className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                    open && "rotate-180"
                                  }`}
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                    fill=""
                                  />
                                </svg>
                              </NavLink>
                              {/* <!-- Dropdown Menu Start --> */}
                              <div
                                className={`translate transform overflow-hidden ${
                                  !open && "hidden"
                                }`}
                              >
                                <ul className="flex flex-col gap-2.5 pl-10">
                                  {item?.subMenu?.map((itemSub, indexSub) => (
                                    <li key={indexSub}>
                                      <NavLink
                                        to={itemSub.path}
                                        className={({ isActive }) =>
                                          cn(
                                            "group relative flex items-center gap-2.5 rounded-3 p-3 typo-s14-w400 duration-300 ease-in-out",
                                            isActive && "bg-primary-main_light"
                                          )
                                        }
                                      >
                                        <p
                                          className={cn(
                                            "typo-s14-w500 text-ui-textSidebar",
                                            (pathname === itemSub?.path ||
                                              pathname?.includes(
                                                itemSub?.path
                                              )) &&
                                              "text-primary-main"
                                          )}
                                        >
                                          {itemSub?.name}
                                        </p>
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/* <!-- Dropdown Menu End --> */}
                            </React.Fragment>
                          );
                        }}
                      </SidebarLinkGroup>
                    </div>
                  );
                } else {
                  return (
                    <li key={index}>
                      <NavLink
                        to={item?.path}
                        className={cn(
                          "group relative flex items-center gap-2.5 rounded-3 p-3 duration-300 ease-in-out ",
                          (pathname === item?.path ||
                            pathname?.includes(item?.path + "/")) &&
                            "bg-primary-main_light"
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill={
                            pathname === item?.path ||
                            pathname?.includes(item?.path + "/")
                              ? "#3F9DBB"
                              : "#25314C"
                          }
                        >
                          {item?.pathIcon}
                        </svg>
                        <p
                          className={cn(
                            "typo-s14-w500 text-ui-textSidebar",
                            (pathname === item?.path ||
                              pathname?.includes(item?.path + "/")) &&
                              "text-primary-main"
                          )}
                        >
                          {item?.name}
                        </p>
                      </NavLink>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
