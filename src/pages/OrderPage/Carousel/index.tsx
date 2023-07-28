import "./_carousel.scss";
// icon
import { BsChevronLeft } from 'react-icons/bs'
import { BsChevronRight } from 'react-icons/bs'
// lib
import { useState } from "react";

import { CarouselItem } from "../../../models/carousel";
import listOptionCarousel from "../../../services/listOptions";

function Carousel(props: any) {

              const [option, setOption] = useState(props.dataChoseCarousel ? props.dataChoseCarousel : "breakfast")

              const [dataCarousel, setDataCarousel] = useState(listOptionCarousel.filter((res: CarouselItem) => res.type.find((res: string) => res === option)))
            console.log(  listOptionCarousel.filter((res: CarouselItem) => res.type.find((res: string) => res === option)));

              if (props.dataChoseCarousel) {
                            setOption(props.dataCarousel)
                            setDataCarousel(listOptionCarousel.filter((res: CarouselItem) => res.type.find((res: string) => res === option)))
              }

              const [styleCarousel, setStyleCarousel] = useState(1)

              return (
                            <div id="carousel" className="container-xl px-10 mx-auto w-full flex justify-center px-0 py-8">
                                          <div className="wrap flex w-full items-center relative overflow-hidden">
                                                        <div className="absolute left-0">
                                                                      <BsChevronLeft />
                                                        </div>
                                                        <div className="carousel-content flex">
                                                                      {
                                                                                    dataCarousel.map((res: CarouselItem, index: number) => {
                                                                                                  return (
                                                                                                                <div
                                                                                                                              onClick={() => { setStyleCarousel(res.id) }}
                                                                                                                              className="carousel-item columns-2 flex flex-col items-center cursor-pointer" key={index}>
                                                                                                                              <div className={`img-wrap rounded-full p-2 mb-1  ${res.id === styleCarousel ? "carousel-item--active" : ""}`}>
                                                                                                                                            <img className="w-20 h-20 rounded-full" src={res.src} alt="" />
                                                                                                                              </div>
                                                                                                                              <p className="capitalize">{res._name}</p>
                                                                                                                </div>

                                                                                                  )
                                                                                    })
                                                                      }

                                                        </div>
                                                        <div className="right-0">
                                                                      <BsChevronRight />
                                                        </div>
                                          </div>
                            </div>
              )
}

export default Carousel;
