import { RouteWrapper } from '@commons/core/router';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const Index = lazy(() => import('@/views/index'));
const About = lazy(() => import('@/views/about'));
const Profile = lazy(() => import('@/views/profile'));

export const coreRoutes: RouteObject[] = [
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'home',
        element: <Index />,
    },
    {
        path: 'profile',
        element: <RouteWrapper name={'profile-page'} element={<Profile />} />,
    },
    {
        path: '',
        element: <Navigate to={'home'} />,
    },
];
