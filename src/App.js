import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import Accueil from "./components/Accueil";
import Employées from "./components/Employées";
import Taches from "./components/Taches"; 

const App =() => {
    return (
        <>
         <Router>
            <Navbar />
           
              <Switch>
                <Route path="/"components={Accueil} exact><Accueil/></Route>
                <Route path="/employées"components={Employées} exact><Employées/></Route>
                <Route path="/taches"components={Taches} exact><Taches/></Route>

              </Switch>
            </Router>
        </>
    )
    }
    
    export default App