import { useState } from "react"
import style from './searchbar.module.css'

const TodoSearchBar =({onSumitButtonClick})=>{

    const [inputValue,setInputValue] = useState("")

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
      }

    const SubmitButton =()=>{
        onSumitButtonClick(inputValue)
        setInputValue("")
    }


    return(
        <div className={style.container}>
            <input className={style.addInput} onChange={onChangeInput} value={inputValue} placeholder="Add a task" />
            <button className={style.addBtn} onClick={SubmitButton}>+</button>

        </div>
    )
}

export default TodoSearchBar;