import { useState } from "react"
import "./_navbar.scss"

import { useTranslation } from "react-i18next"
import { BsSuitHeart } from 'react-icons/bs'

interface Nav {
              id: number,
              value: string
}

function NavBar(props:any) {

              const { t } = useTranslation()
              const listNav: Nav[] = [
                            {
                                          id: 1,
                                          value: 'breakfast',
                            },
                            {
                                          id: 2,
                                          value: 'lunch',
                            },
                            {
                                          id: 3,
                                          value: 'dinner',
                            },
                            {
                                          id: 4,
                                          value: 'snacks',
                            },
                            {
                                          id: 5,
                                          value: 'favorite',

                            }
              ]

              const [styleNav, setStyleNav] = useState(1)


              return (
                            <section id="navbar" className="container-xl px-10 mx-auto w-full flex justify-center px-0 py-8">
                                          <div className="nav-item flex justify-center">
                                                        {listNav.map((item: Nav, index: number) => {
                                                                      return (<button
                                                                                    onClick={() => { setStyleNav(item.id) ; props.choseCarousel(item)}}
                                                                                    className={`btn-nav flex items-center capitalize rounded-3xl shadow-lg py-2 px-10 mx-2 ${item.id === styleNav ? " btn-nav-active " : ""}`} key={index}>
                                                                                    {item.id === 5 ? <span className="pr-3"><BsSuitHeart /></span> : ""}
                                                                                    {t(item.value)}
                                                                      </button>)
                                                        })}
                                          </div>
                            </section>

              )
}

export default NavBar;
