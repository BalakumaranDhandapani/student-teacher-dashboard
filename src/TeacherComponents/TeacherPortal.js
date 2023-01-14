import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import TopBar from '../Components/TopBar'

function TeacherPortal() {
    return (
        <>
            <div id="wrapper">
                <SideBar dashboardLink={"/portal/teacher-dashboard"} detailsLink={"/portal/teacher-details"} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar name={"Mathi"} />
                        <div className='container-fluid'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeacherPortal