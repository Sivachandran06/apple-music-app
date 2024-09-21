import React, { createContext, useState, useRef } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {



  const [user, setUser] = useState({
    loggedin: sessionStorage.getItem('loggedin'),
    song_url: "",
    isPlaying: false,
    audioRef: useRef(null),
    songLikedBy: [],
    songDetails: {},
    songs_likes: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser, }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
