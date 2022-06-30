
import React from 'react';
import {Outlet} from "react-router";

import {Header} from "../header/Header";

function MainLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export { MainLayout};