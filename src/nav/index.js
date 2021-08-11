import React from 'react'
import {
  NavLink,
} from 'react-router-dom'
import './index.css';

function Nav() {
  return (
    <div className="header">
      <NavLink className="nav" exact to="/" activeClassName="link-active">首页</NavLink>
      <NavLink className="nav" to="/UseCallback" activeClassName="link-active">UseCallback</NavLink>
      <NavLink className="nav" to="/useEffect" activeClassName="link-active">useEffect</NavLink>
      <NavLink className="nav" to="/UseReducer" activeClassName="link-active">UseReducer</NavLink>
      <NavLink className="nav" to="/UseContext" activeClassName="link-active">UseContext</NavLink>
    </div>
  )
}

export default Nav