import { store } from './store.js'

import {
    indexPlayers,
    indexTeams,
    createTeam,
    createPlayer,
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
    onIndexTeamSuccess,
    onIndexPlayerSuccess
} from './ui.js'

const signUpContainer = document.querySelector('#sign-up-container')
const signInContainer = document.querySelector('#sign-in-container')
const addTeam = document.querySelector('#add-team-container')
const addPlayer = document.querySelector('#add-player-container')
const playerContainer = document.querySelector('#players')

signUpContainer.addEventListener('submit', (event) => {
	event.preventDefault()
    console.log("im trying to sign up")
	const userData = {
		credentials: 
        {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
    console.log(userData)
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
		.then(indexTeams)
		.then((res) => res.json())
		.then((res) => onIndexTeamSuccess(res.teams))
		.then(indexPlayers)
		.then((res) => res.json())
		.then((res) => onIndexPlayerSuccess(res.players))
		.catch(onFailure)
})

//create
addTeam.addEventListener('submit', (event) => {
	event.preventDefault()
    console.log("im trying to create team")
	const teamData = {
		team: 
        {
			teamName: event.target['teamNameInput'].value,
			origin: event.target['originInput'].value,
		},
	}
    console.log(teamData)
	createTeam(teamData).catch(onFailure)
})
//update


//create
addPlayer.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("im trying to create team")
    const teamData = event.target.getAttribute[team._id].value
	const playerData = {
		player: 
        {
			firstName: event.target['firstNameInput'].value,
			lastName: event.target['lastNameInput'].value,
            wins: event.target['winsInput'].value,
            losses: event.target['lossesInput'].value,
		},
	}

    console.log(playerData)
	createPlayer(teamData, playerData)
        .then((res) => res.json())
        .then((res) => onCreatePlayerSuccess(res.players))
        .catch(onFailure)
})