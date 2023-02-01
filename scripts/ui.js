import { store } from './store.js'

const landingContainer = document.querySelector('#landing-container')
const indexContainer = document.querySelector('#index-container')
const messageContainer = document.querySelector('#message-container')
const teamsContainer = document.querySelector('#teams-containers')
const playersContainer = document.querySelector('#players')

export const onFailure = (error) => {
    messageContainer.innerHTML = 
        `<h3>You've encountered an error.</h3>
        <p>${error}</p>`
}

export const onSignInSuccess = (userToken) => {
    store.userToken = userToken
    landingContainer.classList.add('hide')
    // landingContainer.classList.remove
    indexContainer.classList.remove('hide')
}

// Team 
export const onIndexTeamSuccess = (teams) => {
    teams.forEach((team) => {
		const div = document.createElement('div')
        div.classList.add('team-card')
		div.innerHTML = `
            <h3>Team Name:${team.teamName}</h3>
            <h2>Place of Origin:${team.origin}</h2>
            <button type="button" class="btn btn-primary" data-id="${team._id}">Show Team</button>
            <div id="players"></div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addPlayerModal">Add Player</button>


            <div class="modal fade" id="addPlayerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Player</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Player Form -->
                        <form id="add-player-container">
                            <div class="form-group">
                                <label for="firstNameInput">First Name</label>
                                <input type="text" class="form-control" id="firstNameInput" placeholder="Enter player name">
                            </div>
                            <div class="form-group">
                                <label for="lastNameInput">Last Name</label>
                                <input type="text" class="form-control" id="lastNameInput" placeholder="Enter player name">
                            </div>
                            <div class="form-group">
                                <label for="winsInput">Wins</label>
                                <input type="text" class="form-control" id="winsInput" placeholder="Enter win number">
                            </div>
                            <div class="form-group">
                                <label for="lossesInput">Losses</label>
                                <input type="text" class="form-control" id="lossesInput" placeholder="Enter losses">
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
		teamsContainer.appendChild(div)
	})
}

export const onIndexPlayerSuccess = (players) => {
	players.forEach((player) => {
		const div = document.createElement('div')
        div.classList.add('content-card')
		div.innerHTML = `
            <h3>${player.firstName} ${player.lastName}</h3>
            <button type="button" class="btn btn-primary" data-id="${player._id}">Show Player</button>
        `
		playersContainer.appendChild(div)
	})
}