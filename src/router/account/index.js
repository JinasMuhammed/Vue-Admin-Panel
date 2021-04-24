// import {AuthGuard} from '../router-guards'
// import {LoginGuard} from '../router-guards'

export default [
    {
        path: 'login',
        component: () => import( /* webpackChunkName: "account-login" */ '../../components/forms/form-login.vue'),
        beforeEnter: LoginGuard,
        props: route => ({ query: route.query.origin }),
        meta: { noTopbars: true }
    }
]