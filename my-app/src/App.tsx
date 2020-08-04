import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBarComponent/SearchBar';
import { IUserInput } from './Common/Interfaces';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import MediaGrid from './Components/MediaGridComponent/MediaGrid'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

function App() {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Bulbasaur",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <MuiThemeProvider theme={theme}>
       
        <img className="Title" src="images/pokedex_logo.png" alt="Pokemon Logo"/>
          <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
          <MediaGrid SearchQuery={UserInput.SearchQuery}/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;