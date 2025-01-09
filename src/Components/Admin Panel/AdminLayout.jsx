import React from 'react'
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import "../Admin Panel/AdminPanel.css"
import Logout from '../Logout pg/Logout';


const AdminLayout = () => {

    
    
    return (
        <div >
            {<div style={{ flexGrow: 1, textAlign: 'center' }}>
                <AppBar position='fixed' style={{ zIndex: '55555' }}>
                    <Toolbar>
                        <Typography sx={{ justifyContent: 'center' }} variant="h6">E-commerce Admin Panel</Typography>
                    </Toolbar>
                </AppBar>

                <div style={{ marginTop: '64px', padding: '20px' }}>
                </div>
            </div>}
            <div style={{ display: 'flex' }}>
                <Drawer variant="permanent" anchor="left">
                    <List>
                        <ListItem button='true' component={Link} to="/admin/dashboard">
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button='true' component={Link} to="/admin/productsmanagement">
                            <ListItemText primary="Products" />
                        </ListItem>
                        <ListItem button='true' component={Link} to="/admin/ordermanagement">
                            <ListItemText primary="Orders" />
                        </ListItem>
                        <ListItem>
                            <Logout />

                        </ListItem>
                    </List>
                </Drawer>
            </div>

            <Outlet />



        </div>
    )
}

export default AdminLayout