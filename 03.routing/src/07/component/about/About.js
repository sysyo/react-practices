import React from 'react';
import SiteLayout from "../../layout/SiteLayout";
import { Outlet } from 'react-router';
import Navigation from '../../layout/Navigation';

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}