import { store } from './store.js'

export const signUp = (data) => {
	return fetch(`http://localhost:8000/sign-up`, 
    {
		method: 'POST',
		headers: 
        {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8000/sign-in`, 
    {
		method: 'POST',
		headers: 
        {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

// Player Actions
export const indexPlayers = () => {
	return fetch(`http://localhost:8000/players`, 
    {
		headers: 
        {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const showPlayer = (id) => {
	return fetch(`http://localhost:8000/players/${id}`, 
    {
		headers: 
        {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updatePlayer = (data, id) => {
	return fetch(`http://localhost:8000/players/${id}`, 
    {
		method: 'PATCH',
		headers: 
        {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deletePlayer = (id) => {
	return fetch(`http://localhost:8000/players/${id}`, 
    {
		method: 'DELETE',
		headers: 
        {
            Authorization: `Bearer ${store.userToken}`,
        },
	})
}

//Team Actions
export const indexTeams = () => {
	return fetch('http://localhost:8000/teams', 
    {
		headers: 
        {
            'Authorization': `Bearer ${store.userToken}`
        }
	})
}

export const showTeam = (id) => {
	return fetch(`http://localhost:8000/teams/${id}`, 
    {
		headers: 
        {
            Authorization: `Bearer ${store.userToken}`,
        },
	})
}

export const updateTeam = (data, id) => {
	return fetch(`http://localhost:8000/teams/${id}`, 
    {
		method: 'PATCH',
		headers: 
        {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteTeam = (id) => {
	return fetch(`http://localhost:8000/teams/${id}`, 
    {
		method: 'DELETE',
		headers: 
        {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}