import dispatcher from "../dispatcher";

export function routeChange(route) {
    dispatcher.dispatch({ type: 'ROUTECHANGE_' + route });
}