import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/Admin/AdminNav/AdminNav";

export default function AdminLayout() {
    return (
        <>
            <div className="text-center bg-primary p-3">
                <h1 className="text-light">Admin Area</h1>
            </div>
            <div>
                <div class="row">
                    <div class="col-md-3">
                        <AdminNav />
                    </div>
                    <div class="col-md-9">
                        <Outlet />
                    </div>

                </div>
            </div>

        </>
    );
}
