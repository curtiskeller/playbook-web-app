import dispatcher from "../dispatcher";
import axios from 'axios';

export function loadPlaybookLibrary() {
    dispatcher.dispatch({ type: 'FETCH_PLAYBOOKLIBRARY' });
    axios('/playbooklibrary')
        .then((response) => {
            dispatcher.dispatch(
                { type: "RECEIVE_PLAYBOOKLIBRARY", playbooks: response.data })
        })
        .catch(function (error) { dispatcher.dispatch({type: "FETCH_PLAYBOOKLIBRARY_ERROR"})});
}