import { useContext, createContext } from 'react';

const UserContext = createContext();

function useUserContext() {
  const { user, setUser } = useContext(UserContext);

  const fetchUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/users/${userId}`);
    const userData = await response.json();
    setUser(userData);
  };

  return { user, setUser, fetchUser };
}

function UserProvider({ children }) {
  const { user, setUser, fetchUser } = useUserContext();

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, useUserContext };