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
    onShowTeamSuccess
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
		// .then(indexPlayers)
		// .then((res) => res.json())
		// .then((res) => onIndexPlayerSuccess(res.players))
		.catch(onFailure)
})

//create team
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


//create player
// addPlayer.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log("im trying to create player")
//     const teamData = event.target.getAttribute("data-id").value
// 	const playerData = {
// 		player: 
//         {
// 			firstName: event.target['firstNameInput'].value,
// 			lastName: event.target['lastNameInput'].value,
//             wins: event.target['winsInput'].value,
//             losses: event.target['lossesInput'].value,
// 		},
// 	}

//     console.log(playerData)
// 	createPlayer(teamData, playerData)
//         .then((res) => res.json())
//         .then((res) => onCreatePlayerSuccess(res.players))
//         .catch(onFailure)
// })

///show
indexTeamContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	if (!id) return
	showTeam(id)
		.then((res) => res.json())
		.then((res) => {
			onShowTeamSuccess(res.team)
		})
		.catch(onFailure)
})

//update
showTeamContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const teamData = {
		team: {
			name: event.target['name'].value
		},
	}
	updateTeam(teamData, id)
		.catch(onFailure)
})

//delete
showTeamContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	if (!id) return
	deleteTeam(id)
		.catch(onFailure)
})