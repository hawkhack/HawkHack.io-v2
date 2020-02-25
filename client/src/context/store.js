import React, { createContext, useState } from 'react';

export const UserContext = createContext()

const StateProvider = ({ children }) => {
	const [user, setUser] = useState({
		user: {
			profile: {},
			loggedIn: localStorage.getItem("cool-jwt") ? true : false
		}
	})

	const handleUser = (val) => {
		const newUser = val
		newUser.loggedIn = true
		if (!val.profile) {
			newUser.profile = {
				status: "Incomplete"
			}

			if (!val.isVerified) {
				newUser.profile.status = "Email not verified"
			}
		}

		setUser({ user: val })
	}

	return (
		<UserContext.Provider value={[ user, handleUser ]}>
			{ children }
		</UserContext.Provider>
	)
}

export default StateProvider