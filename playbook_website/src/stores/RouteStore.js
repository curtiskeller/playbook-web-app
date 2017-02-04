import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class RouteStore extends EventEmitter{
    constructor()
    {
        super();
        this.currentRoute = '/';
    }
    getRoute()
    {
        return this.currentRoute;
    }
    changeRoute(route)
    {
        this.currentRoute = route;
        this.emit("change");
    }
    
    handleActions(action){
        switch(action.type){
            case "ROUTECHANGE_INDEX":
            {
                this.changeRoute('/');
                break;
            }
            case "ROUTECHANGE_SCRATCH":
            {
                this.changeRoute('/scratch');
            }
        }
    }
}

const routeStore = new RouteStore;

dispatcher.register(routeStore.handleActions.bind(routeStore));

export default routeStore;