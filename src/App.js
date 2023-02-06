import React, { Component, useState } from 'react';
import TodoItems from './components/todoItems';
import TodoSearchBar from './components/todoSearchBar';
import './App.css'


function App()  {

  const [list,setList] = useState([])

  const onSumitButtonClick =(submitedValue)=>{
    // console.log(submitedValue);
    const newList= [...list]
    newList.push(submitedValue)
    setList(newList)
  }

  const onClickDeleteButton=(item)=>{
    const itemIndex = list.indexOf(item);
    if( itemIndex != -1 ) {
      const newList = [...list]
      newList.splice(itemIndex,1)
      setList(newList)
    }

  }

    return (
    <div className='app'>
      <div className='container'>
        <TodoSearchBar onSumitButtonClick={onSumitButtonClick} />
        <TodoItems list={list} del={onClickDeleteButton} />
      </div>
    </div>
    );
  
}
 
export default App;
