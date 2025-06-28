npx create-react-app frontend
cd frontend
# Axios for HTTP requests
npm install axios

# Bootstrap (basic CSS framework)
npm install bootstrap

# React Bootstrap (Bootstrap components as React components)
npm install react-bootstrap

# Material UI (MUI) - Core and Icons
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

# Moment.js for date formatting
npm install moment

# Ant Design (Antd)
npm install antd

# MDB React UI Kit (Material Design for Bootstrap)
npm install mdb-react-ui-kit
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // or your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
// src/pages/Demo.js
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import moment from 'moment';
import { Button } from 'antd';
import { MDBCard } from 'mdb-react-ui-kit';

function Demo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get('/your-api-endpoint').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Demo Page</h2>
      {data.map((item, index) => (
        <MDBCard key={index} className="p-3 my-2">
          <p>{item.name}</p>
          <small>{moment(item.date).format('MMMM Do YYYY')}</small>
        </MDBCard>
      ))}
      <Button type="primary">Ant Design Button</Button>
    </div>
  );
}

export default Demo;
