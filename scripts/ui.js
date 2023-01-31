import { store } from './store.js'

const landingContainer = document.querySelector('#landing-container')
const indexContainer = document.querySelector('#index-container')
const messageContainer = document.querySelector('#message-container')


export const onFailure = (error) => {
    messageContainer.innerHTML = 
        `<h3>You've encountered an error.</h3>
        <p>${error}</p>`
}

export const onSignInSuccess = (userToken) => {
    store.userToken = userToken
    landingContainer.classList.add('hide')
    indexContainer.classList.remove('hide')
}