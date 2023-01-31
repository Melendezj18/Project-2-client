import { store } from './store.js'

import {
    indexPlayers,
    indexTeams,
    showPlayer,
    showTeam,
    updatePlayer,
    updateTeam,
    deletePlayer,
    deleteTeam,
    signIn,
    signUp,
} from './api.js'

import {
    onFailure,
    onSignInSuccess,
} from './ui.js'

const signUpContainer = document.querySelector('#sign-up-container')
const signInContainer = document.querySelector('#sign-in-container')

signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: 
        {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData).catch(onFailure)
})

signInContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = 
    {
		credentials: 
        {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		// .then(indexTeams)
		// .then((res) => res.json())
		// .then((res) => onIndexTeamSuccess(res.teams))
		// .then(indexPlayers)
		// .then((res) => res.json())
		// .then((res) => onIndexPlayerSuccess(res.players))
		.catch(onFailure)
})
