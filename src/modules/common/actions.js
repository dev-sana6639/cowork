import * as Actions from './constants';

export const isgettingstart = () =>({
    type: Actions.IS_GETTING_START,
})

export const isgettingStartended = () =>({
    type: Actions.IS_GETTING_START_ENDED
})

export const isLoading = () =>({
    type: Actions.IS_LOADING
}) 

export const stopisLoading = () =>({
    type:Actions.IS_LOADING_FALSE
})

export const startLoading =() =>({
    type:Actions.START_LOADING
})

export const skiponboard = () =>({
    type: Actions.SKIP_ONBOARD_START
})

export const gettingstartcompleted = () =>({
    type: Actions.GETTINGSTART_COMPLTE_START
})

export function backtoonboard () {
    return{
        type: Actions.BACK_TO_ONBOARD_START
    }
}

