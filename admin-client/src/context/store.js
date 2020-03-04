import React from 'react';

export const UserContext = React.createContext();

const StateProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    user: {
      profile: {},
      loggedIn: !!localStorage.getItem('cool-jwt'),
    },
  });

  const handleUser = (val) => {
    const newUser = val;
    newUser.loggedIn = true;
    if (!val.profile) {
      newUser.profile = {
        status: 'Incomplete',
      };

      if (!val.isVerified) {
        newUser.profile.status = 'Email not verified';
      }
    }

    setUser({ user: val });
  };

  return (
    <UserContext.Provider value={[user, handleUser]}>
      { children }
    </UserContext.Provider>
  );
};

export default StateProvider;
