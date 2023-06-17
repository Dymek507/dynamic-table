import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { NavLink, useLocation } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadcrumbsBar = () => {

  const loaction = useLocation()
  console.log(loaction.pathname)
  let currentLink
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "underline text-black" : ""
        }>
          Home
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) =>
          isActive ? "underline text-black" : ""
        }>
          Catalog
        </NavLink>
        <NavLink to="/catalog/" className={({ isActive }) =>
          isActive ? "underline text-black" : ""
        }>
          Book
        </NavLink>

      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbsBar
