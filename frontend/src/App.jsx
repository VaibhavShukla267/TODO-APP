// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';

import './index.css';
import Lists from './component/List';
import axios from 'axios';
import { baseURL } from './utils/constant';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId,setUpdateId]=useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      });
  }, [updateUI]);

  // Add Todo Tasks
  const addTasks = () => {
    axios.post(`${baseURL}/save`, { tasks: input })
      .then((res) => {
        console.log(res.data);
        setInput(""); 
        setUpdateUI((prevState)=>!prevState)
        
      });
  };

  // Update Todo Tasks

  const updateMode=(id,text)=>{
    console.log(text);
    setInput(text);
    setUpdateId(id);

  }

  const updateTodo=()=>{
    axios.put(`${baseURL}/update/${updateId}`,{task:input})
    .then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState=>!prevState));
      setUpdateId(null);
      setInput("");


    })
  }

  return (
    <div style={{ padding: "20px", border: "1 px solid red", borderRadius: "8px" }}>
      <h1 style={{ fontSize: "2em", display: 'flex', justifyContent: "center" }}>MY TODO APP</h1>
      <Form
        {...layout}
        name="basic"
      >
        <Form.Item
          style={{ color: "black" }}
          label="Write Your Todo Work"
          name="text"
        >
          <Input
          style={{ color: "black" }} 
          value={'input'} /> 
          <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary"
            htmlType="submit"
            onClick={updateId?updateTodo:addTasks}>
             
           {updateId ?"Update ToDo Tasks":"Add ToDo Tasks"}
          </Button>
        </Form.Item>
      </Form>

      <ul>
        {tasks.map((task) => (
          <Lists key={task._id} id={task._id} task={task.tasks} setUpdateUI={setUpdateUI}
          updateMode={updateMode} /> 
        ))}
      </ul>
    </div>
  );
};

export default App;
