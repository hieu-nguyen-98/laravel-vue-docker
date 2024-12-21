import AdminApp from './components/AdminApp.vue';
import MainApp from "./components/MainApp";

export const routes = [
    {
        path: '/admin',
        component: AdminApp, 
        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: () => import('./components/Products/Index')
            },
            {
                path: 'users',
                name: 'admin-users',
                component: () => import('./components/Products/Index')
            },
            {
                path: 'settings',
                name: 'admin-settings',
                component: () => import('./components/Products/Index')
            },
        ],
        beforeEnter: (to, from, next) => {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            if (user && user.role === 1) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/',
        component: AdminApp, 
        name: 'products.index',
        component: () => import('./components/Products/Index')
    },

    {
        path: '/login',
        name: 'auth.login',
        component: () => import('./components/auth/login')
    },

    {
        path: '/register',
        name: 'auth.register',
        component: () => import('./components/auth/register')
    },

    {
        path: '/products/create',
        name: 'products.create',
        component: () => import('./components/Products/New'),
        meta: {
            requiresAuth: true
        }
    },

    {
        path: '/products/:slug',
        name: 'products.show',
        component: () => import('./components/Products/Show')
    },

    {
        path: '/checkout',
        name: 'order.checkout',
        component: () => import('./components/Order/Checkout')
    },

    {
        path: '/summary',
        name: 'order.summary',
        component: () => import('./components/Order/Summary')
    },

]
