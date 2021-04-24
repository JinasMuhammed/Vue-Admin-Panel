import store from '@/store'

export const AuthGuard = (to, from, next) => {
    if (store.state.account.isLogedIn) {
        next()
    } else {
        next({ path: '/account/login' })
    }
}

export const LoginGuard = (to, from, next) => {
    if (store.state.account.isLogedIn) {
        next(from)
    } else {
        next()
    }
}