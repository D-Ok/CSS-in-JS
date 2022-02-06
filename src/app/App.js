import React, {useState} from "react";
import {ThemeProvider} from "styled-components";

import GLOBAL_CONSTANTS from "../assets/constants";
import lightTheme from "../assets/lightTheme";
import darkTheme from "../assets/darkTheme";
import {AppContainer, AppStyles} from "./style";
import posts from "../assets/posts";
import Header from "../components/Header";
import Avatar from "../components/Avatar";
import Post from "../components/Post";

const { LIGHT, DARK } = GLOBAL_CONSTANTS.THEMES


function App() {
  const [currentTheme, setTheme] = useState(DARK)

  const toggleTheme = () => {
    let newTheme = currentTheme === LIGHT ? DARK : LIGHT;
    setTheme(newTheme)
  }

  const themeObj = currentTheme === LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeObj}>
      <AppContainer>
        <AppStyles>
          <Header onToggleTheme={toggleTheme}/>
          <Avatar/>
          {posts.map((p) => <Post {...p}/>)}
        </AppStyles>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
