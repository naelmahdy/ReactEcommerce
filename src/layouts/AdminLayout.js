import React from "react";
import { Outlet } from "react-router-dom";
// import AdminNav from "../components/Admin/AdminNav/AdminNav";

export default function AdminLayout() {
    // let adminData = localStorage.getItem('adminData')
    // useEffect(() => {


    // }, [adminData])
    // {adminData ? <AdminNav /> : ''}


    return (
        <React.Fragment>
            <div className="text-center bg-primary p-3">
                <h1 className="text-light">Admin Area</h1>
            </div>
            <div>

                <Outlet />

            </div>

        </React.Fragment>
    );
}
