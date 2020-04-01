import {CREATE_POST, HIDE_ALERT, HIDE_LOADER, REQUESTS_POSTS, SHOW_ALERT, SHOW_LOADER} from './types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 1500)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

// thunk
// export function fetchPosts() {
//     return async dispatch => {
//         try {
//             dispatch(showLoader())
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//             const json = await response.json()
//             dispatch({ type: FETCH_POSTS, payload: json })
//             dispatch(hideLoader())
//         } catch (e) {
//             dispatch(showAlert('Something went wrong'))
//             dispatch(hideLoader())
//         }
//     }
// }

// saga
export function fetchPosts() {
    return {
        type: REQUESTS_POSTS
    }
}
