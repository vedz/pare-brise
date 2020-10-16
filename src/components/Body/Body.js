import React from "react"
import Reservation from './.././../containers/reservation/Reservation'
import ClientHistory from './.././../containers/reservation/Administration/ClientHistory/ClientHistory'
import { Switch, Route, useHistory, Redirect } from "react-router-dom";


const BodyHapp = React.FunctionComponent= () => {
    
     return (              
        <div>
            <Switch>
                <Route path="/" exact>
                    <Reservation/>
                </Route>
                <Route path="/Reservation">
                    <Reservation />
                </Route> 
                <Route path="/ClientHistory">
                    <ClientHistory/>
                </Route>
            </Switch>
        </div>
    )
}

export default BodyHapp;