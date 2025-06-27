import { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from '../component/Shared/Header';
import Footer from '../component/Shared/Footer';
import Breadcrumbs from '../component/Shared/Breadcrumbs';

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); // Triggers scroll to top on route/pathname change

    return (
        <main >
            <Header />
            <Breadcrumbs />
            <Outlet />
            <Footer />
        </main>
    );
};

export default MainLayout;
