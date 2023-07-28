import { AiFillStar } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'
import { GoDotFill } from 'react-icons/go'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoIosAddCircleOutline } from 'react-icons/io'

import "./_dishitem.scss"
import { useState } from 'react'

import { Dish } from '../../../../models/dish'
function DishItem(prop: any ) {
     const data = prop.data as Dish

     const [stateAdd, setStateAdd] = useState(false)
     function btnAdd(e: any) {
          let a = e.currentTarget.classList.toggle('btn-add')
          if (a === true) {
               setStateAdd(false)
          } else {
               setStateAdd(true)
          }
     }
     function handlerAddBtn() {
          if (!stateAdd) {
               return (<span><IoIosCheckmarkCircleOutline /></span>)

          } else {
               return (<span><IoIosAddCircleOutline /></span>)
          }
     }
     return (
          <div className="shadow-lg hover:shadow-xl rounded-xl cursor-pointer">
               <div className="bg-white rounded-xl px-4 py-6 mx-0 my-5">
                    <div className='flex relative items-center'>
                         <div className="dish-img relative pr-8">
                              <img className='img-dish' src={data.src} alt="mon1" />
                              <span className={`like-element ${data.like === true ? "btnLike" : ""}`} > <AiOutlineHeart /></span>
                         </div>
                         <div className="flex flex-col">
                              <div className="text-3xl font-bold pb-2">{data.name} + {data.id}</div>
                              <div className="flex pb-2 ">
                                   <div className='flex items-center pr-5'><span className='icon-star'><AiFillStar /></span>{data.star}</div>
                                   <div className='flex items-center'><span><BiTime /></span>{data.time}</div>
                              </div>
                              <div className="flex pb-4 items-center mr-2 text-red-600"><span className='pr-2'><GoDotFill /></span>{data.allergenic} </div>
                              <div className="text-3xl text-sky-950">{data.price}</div>
                         </div>
                         <div onClick={(e) => { btnAdd(e) }} className='btn-card'>
                              {
                                   handlerAddBtn()
                              }
                         </div>
                    </div>
               </div>
          </div>)
}
export default DishItem
