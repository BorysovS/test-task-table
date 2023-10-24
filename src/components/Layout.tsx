import { AppBar } from "./AppBar/AppBar"

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from "../GlobalStyle";

export const Layout = () => { 
    return (
        <>
            <div>
                <div>
                    <AppBar />
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </div>
                <GlobalStyle />
            </div>
        </>
    )
}