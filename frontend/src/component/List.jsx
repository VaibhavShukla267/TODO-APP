/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';
import { baseURL } from '../utils/constant';

const data = [
  { id: 1, task: 'Do laundry' },
  { id: 2, task: 'Buy groceries' },
];

const Lists = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTodo=()=>{
    axios.delete(`${baseURL}/delete/${id}`)
    .then((res)=>{
      console.log(res);
      setUpdateUI((prevState=>!prevState));
    })
  }
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid red',
        padding: '10px',
        margin: '10px auto',
        borderRadius: '8px', 
      }}
    >
      <li
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span>{task}</span>
        <div
          className='icon_holder'
          style={{
            display: 'flex',
            gap: '1em',
            alignItems: 'center',
          }}
        >
          <FaEdit
          onClick={()=>updateMode(id,task)}
            style={{
              cursor: 'pointer',
              color: '#4caf50',
            }}
          />
          <MdDeleteForever
          onClick={removeTodo}
            style={{
              cursor: 'pointer',
              color: '#f44336', 
            }}
          />
        </div>
      </li>
    </div>
  );
};

export default Lists;
