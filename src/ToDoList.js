/* eslint-disable prettier/prettier */
import React from 'react'
import Todo from './Todo'

export default function ToDoList({todos}) {
  return (
    //  5 looping each entry so each entry will return Todo element
    todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
    })
  )
}

