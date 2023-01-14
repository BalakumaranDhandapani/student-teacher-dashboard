import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import TopBar from '../Components/TopBar'

function StudentPortal() {
    return (
        <>
            <div id="wrapper">
                <SideBar dashboardLink={"/student-portal/student-dashboard"} detailsLink={"/student-portal/student-details"} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar name={"Bharath"} />
                        <div className='container-fluid'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentPortal