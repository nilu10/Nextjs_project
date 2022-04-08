import * as React from 'react';
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link';
const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <Image
        src={logo} className="sidebarLogo" alt="Company logo" width="150px" height="50px" />
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" href="/reportForm">
              <span className="menu-title">Faculty Details</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Students Faculty Ratio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Faculty Cadre Proportion</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Faculty Qualification</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Faculty Retention</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Innovations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Faculty as Participants</span>
            </Link>
          </li>
          <li className="nav-item nav-category">Research and Development</li>
          <li className="nav-item">
            <Link className="nav-link" href="/Academicresearch">
              <span className="menu-title">Academic Research</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Sponsored Research</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Faculty as Participants</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title">Development Activities</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#charts">
              <span className="menu-title"> Consultancy (Industry)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar