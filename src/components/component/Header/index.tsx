//lib
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
//icon
import { BiDish } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { TbMessageDots } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdNotificationsOutline } from 'react-icons/io'
//assets
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/avatar.jpg"
//css
import "./_header.scss"

interface Menu {
              id: number,
              _name: string,
              routerTo: string,
              icon: any,
}

function Header() {
              const { t } = useTranslation();

              const username: string = "mcn"

              const listMenu: Menu[] = [{
                            id: 1,
                            icon: <BiDish />,
                            _name: "order",
                            routerTo: "/order"
              },
              {
                            id: 2,
                            icon: <CgNotes />,
                            _name: "myOrder",
                            routerTo: "/my-order"
              }, {
                            id: 3,
                            icon: <TbMessageDots />,
                            _name: "feedback",
                            routerTo: "/feedback"
              },
              {
                            id: 4,
                            icon: <FiPhoneCall />,
                            _name: "support",
                            routerTo: "/support"
              }
              ]

              const location = useLocation();
              let initMenu = null
              if (location?.state?.id) {
                            initMenu = location?.state?.id
              } else if (location?.key === "default") {
                            initMenu = 1
              }
              const [styleMenu, setStyleMenu] = useState<number | null>(initMenu);

              return (
                            <div id="header" className="container-xl px-10 mx-auto w-full flex flex-row items-center justify-betwen">
                                          <div className="columns-2">
                                                        <Link to="/order">  <img src={logo} alt="Logo" title="Logo" /></Link>
                                          </div>
                                          <nav className="columns-8 flex items-center justify-between w-full">
                                                        {
                                                                      listMenu.map((arr, i) => {
                                                                                    return (<div
                                                                                                  className="w-full px-2"
                                                                                                  key={i}
                                                                                                  onClick={() => setStyleMenu(arr.id)} >
                                                                                                  <Link
                                                                                                                to={arr.routerTo}
                                                                                                                state={{ id: arr.id }}
                                                                                                                className={`flex justify-center items-center w-full js menu-item   ${styleMenu === arr.id ? " menu-active" : ""}`} >
                                                                                                                <span
                                                                                                                              className="text-4xl"> {arr.icon} </span>
                                                                                                                <p
                                                                                                                              className="capitalize text-3xl ml-3">{t(arr._name)}</p>
                                                                                                  </Link>
                                                                                    </div>)
                                                                      })}
                                          </nav>
                                          <div className="columns-2 flex profile items-center cursor-pointer">
                                                        <span className="text-5xl relative">  <IoMdNotificationsOutline /></span>
                                                        <p className="capitalize text-3xl px-4">{username}</p>
                                                        <div className="avatar relative">
                                                                      <img className="w-14 h-14 rounded-full object-cover" src={avatar} alt="avatar" />
                                                                      <div className="tab">
                                                                                    <div className="tab-wrap">
                                                                                                  <Link to="/profile">
                                                                                                                 <div className="tab-item">{t("myAccount")}</div></Link>
                                                                                                  <Link to="/setting">
                                                                                                                <div className="tab-item">{t("setting")}</div></Link>
                                                                                                  <div className="tab-item">{t("logout")}</div>
                                                                                    </div>
                                                                      </div>
                                                        </div>
                                          </div>
                            </div>

              )
}
export default Header;
