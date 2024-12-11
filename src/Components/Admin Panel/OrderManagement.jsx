import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AdminLayout from './AdminLayout';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <AdminLayout>
      <h1>Manage Orders</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.user}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default OrderManagement;
