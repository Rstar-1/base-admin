import React from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../../../assets/logo.png";

const Sidebar2 = () => {
  const sidebarmenu = [
    {
      icon: "grid",
      name: "Dashboard",
      route: "dashboard",
      accordian: "accordion-1",
      tabId: "cb1",
      dropdown: [],
    },
    {
      icon: "folder",
      name: "Portfolio",
      route: "",
      accordian: "accordion-2",
      tabId: "cb2",
      dropdown: [],
    },
    {
      icon: "settings",
      name: "Services",
      route: "sections",
      accordian: "accordion-3",
      tabId: "cb3",
      dropdown: [],
    },
    {
      icon: "file",
      name: "CMS",
      route: "blogs",
      accordian: "accordion-4",
      tabId: "cb4",
      dropdown: [],
    },
    {
      icon: "book",
      name: "Billing",
      route: "elearning",
      accordian: "accordion-6",
      tabId: "cb6",
      dropdown: [],
    },
    {
      icon: "search",
      name: "Seo",
      route: "ecom",
      accordian: "accordion-5",
      tabId: "cb5",
      dropdown: [],
    },
  ];

  // const sidebarmenu = [
  //   {
  //     icon: "grid",
  //     name: "Dashboard",
  //     route: "dashboard",
  //     accordian: "accordion-1",
  //     tabId: "cb1",
  //     dropdown: [],
  //   },
  //   {
  //     icon: "user",
  //     name: "Pages",
  //     route: "",
  //     accordian: "accordion-2",
  //     tabId: "cb2",
  //     dropdown: [
  //       {
  //         icon: "user",
  //         name: "About Us",
  //         route: "AboutUs",
  //       },
  //       {
  //         icon: "grid",
  //         name: "Services",
  //         route: "Services",
  //       },
  //       {
  //         icon: "plus",
  //         name: "Teams",
  //         route: "Teams",
  //       },
  //       {
  //         icon: "edit",
  //         name: "Gallery",
  //         route: "Gallery",
  //       },
  //       {
  //         icon: "grid",
  //         name: "Connect Us",
  //         route: "ConnectUs",
  //       },
  //     ],
  //   },
  //   {
  //     icon: "settings",
  //     name: "Sections",
  //     route: "sections",
  //     accordian: "accordion-3",
  //     tabId: "cb3",
  //     dropdown: [
  //       {
  //         icon: "user",
  //         name: "About Us",
  //         route: "AboutUs",
  //       },
  //       {
  //         icon: "grid",
  //         name: "Services",
  //         route: "Services",
  //       },
  //       {
  //         icon: "plus",
  //         name: "Teams",
  //         route: "Teams",
  //       },
  //     ],
  //   },
  //   {
  //     icon: "folder",
  //     name: "Blogs",
  //     route: "blogs",
  //     accordian: "accordion-4",
  //     tabId: "cb4",
  //     dropdown: [],
  //   },
  //   {
  //     icon: "grid",
  //     name: "Ecom",
  //     route: "ecom",
  //     accordian: "accordion-5",
  //     tabId: "cb5",
  //     dropdown: [],
  //   },
  //   {
  //     icon: "phone-call",
  //     name: "Elearning",
  //     route: "elearning",
  //     accordian: "accordion-6",
  //     tabId: "cb6",
  //     dropdown: [],
  //   },
  //   {
  //     icon: "grid",
  //     name: "Ecom",
  //     route: "ecom",
  //     accordian: "accordion-5",
  //     tabId: "cb5",
  //     dropdown: [],
  //   },
  //   {
  //     icon: "phone-call",
  //     name: "Elearning",
  //     route: "elearning",
  //     accordian: "accordion-6",
  //     tabId: "cb6",
  //     dropdown: [],
  //   },
  // ];

  return (
    <div className="bgcard h-100 overflow-auto relative sidebar2">
      <div className="">
        <div className="flex justify-center py5">
          <img src={logo} alt="logo" className="sidebar-logo object-contain" />
        </div>
        <div className="pbpx10">
          <div className="grid grid-cols-1">
            {sidebarmenu.map((e) => (
              <>
                <div className="">
                  {e.dropdown.length > 0 ? (
                    <>
                      <div class="accordion my2">
                        <div class="tab">
                          <input
                            type="checkbox"
                            name={e.accordian}
                            id={e.tabId}
                          />
                          <label
                            for={e.tabId}
                            className="py10 px15 cursor-pointer flex justify-between items-center textforth font-300"
                          >
                            <div className="flex items-center gap-4">
                              <FeatherIcon
                                icon={e.icon}
                                className="textgray cursor-pointer"
                                size={16}
                              />
                              <p className="fsize13 textgray mtpx2 font-300 plpx4">
                                {e.name}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
                                {e.dropdown.length}
                              </p>
                              <FeatherIcon size="16" icon="chevron-right" />
                            </div>
                          </label>
                          <div class="tab__content">
                            <div className="grid grid-cols-1 px12">
                              {e.dropdown.map((drop) => (
                                <NavLink
                                  activeClassName="active"
                                  className="flex items-center activesidebar py7 gap-9"
                                  to={drop.route}
                                >
                                  <div className="icon-circle flex items-center justify-center rounded-full">
                                    <FeatherIcon
                                      icon={drop.icon}
                                      className="cursor-pointer flex"
                                      size={12}
                                    />
                                  </div>
                                  <p className="fsize13 text-side mtpx2 font-300">
                                    {drop.name}
                                  </p>
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink
                        activeClassName="active"
                        className="flex items-center activesidebar px15 py8 gap-9"
                        to={e.route}
                      >
                        <div className="icon-circle flex items-center justify-center rounded-full">
                          <FeatherIcon
                            icon={e.icon}
                            className="cursor-pointer flex"
                            size={12}
                          />
                        </div>
                        <p className="fsize13 text-side mtpx2 font-300">
                          {e.name}
                        </p>
                      </NavLink>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
