import React from "react"
import ClientHistory from './.././../containers/reservation/Administration/ClientHistory/ClientHistory'
import { Switch, Route, useHistory, Redirect } from "react-router-dom";


const BodyHapp = React.FunctionComponent = () => {

    return (
        <div>
            <Switch>
                <Route path="/">
                    <ClientHistory />
                </Route>
            </Switch>
        </div>
    )
}

export default BodyHapp;