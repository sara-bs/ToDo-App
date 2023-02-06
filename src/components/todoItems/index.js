import { useState } from "react"
import style from './items.module.css'

const TodoItems =({list, del})=>{
  
    return(
        <div className={style.container}>
            <ul className={style.list}>
        {list.map((items,i)=>
            <li className={style.listItems} key={i}>{items} 
                <div className={style.btnWrapper}>
                    <button className={style.listBtnCheck} >✓</button>
                    <button className={style.listBtn} onClick={()=> del(items)}>X</button>
                </div>
            </li>
            )}
      </ul>
        </div>
    )
}

export default TodoItems;