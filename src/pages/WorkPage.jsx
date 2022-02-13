import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import PaginationButton from "../components/PaginationButton";



const WorkPage = () => {

  const state = useSelector((state) => state.todos);
  console.log(state)
 let buttonArray = new Array(20).fill(0)
 
  return (
    <>
      <TodoInput />
      {state.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
   <div className='pagination'>
    {
        buttonArray.map((e,i)=><PaginationButton count={i+1}/>)
      }
  </div>
     
    </>
  );
};

export default WorkPage;
