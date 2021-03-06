
import { createSelector } from 'reselect'

export const auth = state => state.auth;

export const authSelector =  createSelector(
    auth,
    data =>data
)

export const getconfirm = createSelector(
    auth,
    data =>data.confirm
)
export const isLoginSelector = createSelector(
    auth,
    data => data.isLogin
)
         
export const getuserSelector = createSelector(
    auth,
    data => data.user
)

export const getuidSelector = createSelector(
    auth,
    data =>data.user.uid
)

export const invalideEmailandpassword =createSelector(
    auth,
    data =>data.invalidemailandpasswordError
)

export const isAnonymousSelector = createSelector(
    auth,
    data => data.isAnonymous
)