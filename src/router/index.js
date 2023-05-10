import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import store from '../store'
import SignIn from '../views/sessions/SignIn.vue'
import SignUp from '../views/sessions/SignUp.vue'
import { useUserStore } from '../store/user.js'
import { auth } from '../firebase'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/dashboards/dashboard-version-one',
        meta: {
            title: 'Home',
        },

        children: [
            {
                path: '/contactos',
                name: 'contactos',
                component: () => import('../views/contactos/index.vue'),
                meta: {
                    title: 'contactos',
                },
                children: [
                    {
                        path: 'contactos',
                        name: 'contactos',
                        component: () =>
                            import('../views/contactos/contactos.vue'),
                    },
                ],
            },
            {
                path: '/dashboards',
                name: 'Dashboards',
                component: () => import('../views/dashboards/index.vue'),
                meta: {
                    title: 'Dashboard',
                },
                children: [
                    {
                        path: 'dashboard-version-one',
                        name: 'dashboard-version-one',
                        component: () =>
                            import('../views/dashboards/Dashboards.v1.vue'),
                    },
                    {
                        path: 'dashboard-version-two',
                        name: 'dashboard-version-two',
                        component: () =>
                            import('../views/dashboards/Dashboards.v2.vue'),
                    },
                ],
            },
            {
                path: '/schedule',
                name: 'Schedule',
                component: () => import('../views/schedule/index.vue'),
                meta: {
                    title: 'Schedule',
                },
                children: [
                    {
                        path: 'Cronograma',
                        name: 'Cronograma',
                        component: () =>
                            import('../views/schedule/Cronograma.vue'),
                    },
                ],
            },
            {
                path: '/profile',
                name: 'profile',
                component: () => import('../views/profile/index.vue'),
                meta: {
                    title: 'Profile',
                },
                children: [
                    {
                        path: 'profileTwo',
                        name: 'ProfileTwo',
                        component: () =>
                            import('../views/profile/ProfileTwo.vue'),
                    },
                    {
                        path: 'admin1',
                        name: 'admin1',
                        component: () =>
                            import('../views/profile/admin.vue'),
                        meta: {
                            auth: true,
                        }
                    },
                ],
            },
        ],
    },

    { path: '/signIn', component: SignIn },
    { path: '/signUp', component: SignUp },

    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes,
})

router.afterEach(() => {
    if (window.innerWidth <= 1200) {
        const sidenav =
            store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

        store.commit('largeSidebar/toggleSidebarProperties')
    }
})
router.beforeEach((to, from, next) => {
    if (to.name === 'signIn' && auth.currentUser) {
      next('admin1');
    } else if (to.matched.some((record) => record.meta.auth) && !auth.currentUser) {
      next('signIn');
    } else {
      next();
    }
  });
  
export default router;
