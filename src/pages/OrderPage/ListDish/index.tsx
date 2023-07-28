import "./_listDish.scss";
import DishItem from "./DishItem";
import fakeListDish from "../../../services/listDish";
import { useTranslation } from "react-i18next";
import { Dish } from "../../../models/dish";

import { useState } from "react";
function ListDish() {
              let listPage: any = []

              function getList(tt: number) {
                            if (tt > 0) {
                                          listPage.push(tt);
                                          tt = tt - 1
                                          getList(tt)
                            } else { return }
              }
              getList(Math.ceil(fakeListDish.length / 9));

              listPage.reverse()
              const { t } = useTranslation();

              const [totalS, setTotalS] = useState(0)
              const [totalE, setTotalE] = useState(9)
              const [dataPage, setDataPage] = useState(fakeListDish.slice(totalS, totalE))

              function loadNextPage(num: number) {

                            console.log(num);


                            if (num === Math.ceil(fakeListDish.length / 9)) {
                                          setDataPage(fakeListDish.slice((num - 1) * 9, fakeListDish.length))

                            } else {
                                          console.log("đầu");
                                          setTotalE(num * 9)
                                          setTotalS((num - 1) * 9);
                                          setDataPage(fakeListDish.slice(totalS, totalE))

                            }
              }

              return (
                            <section id="dish" className="container-xl px-10 mx-auto w-full flex flex-col px-0 py-8">
                                          <div className="font-bold">{t("titleListDish")}</div>
                                          <div className="flex flex-wrap list-dish">
                                                        {
                                                                      dataPage.map((e: Dish, index: number) => {
                                                                                    return (<div className="dish-item" key={index}>
                                                                                                  <DishItem data={e} />
                                                                                    </div>)
                                                                      })
                                                        }

                                          </div>
                                          <div className="paging flex w-full justify-center items-center">
                                                        {
                                                                      listPage.map((num: number, index: number) => {
                                                                                    return (<button
                                                                                                  onClick={() => { loadNextPage(num) }}
                                                                                                  key={index}
                                                                                                  className="paging-btn">
                                                                                                  {num}
                                                                                    </button>)
                                                                      })
                                                        }
                                          </div>
                            </section>
              )
}
export default ListDish
