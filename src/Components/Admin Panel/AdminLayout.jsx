import React from 'react'
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
    return (
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
                </List>
            </Drawer>

            {/* Main content area */}
            <div style={{ flexGrow: 1 }}>
                <AppBar >
                    <Toolbar positon='slick'>
                        <Typography variant="h6">E-commerce Admin Panel</Typography>
                    </Toolbar>
                </AppBar>

                <div style={{ marginTop: '64px', padding: '20px' }}>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout