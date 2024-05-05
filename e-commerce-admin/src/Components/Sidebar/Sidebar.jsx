import React from 'react';
import './Sidebar.css';
import add_product_icon from '../Assets/Product_Cart.svg';
import list_product_icon from '../Assets/Product_list_icon.svg';
import add_user_icon from '../Assets/Add_User.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      {/* User Management Links */}
      <Link to='/adduser' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_user_icon} style={{width:"20%"}} alt="" />
          <p>Add User</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
