import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/Character/CharacterList"

export default function App() {
  return (
    <main>
      <Header />
        {/* Hook up pages with React Router */}
        <Switch>        
            <Route path="/characters">
              <CharacterList />
            </Route>
            <Route path="/">
              <WelcomePage />
            </Route>
          </Switch>  
    </main>
  );
}
