---
to: src/core/features/<%= name %>/actions.ts
---
<% actionEnum =  'E' + h.capitalize(name) + 'Action' %>
<% actionType =  h.capitalize(name) + 'ReducerType' %>

import {Dispatch} from "redux";
import {<%= actionType %>, <%= actionEnum %>} from "./types";


export default class <%= h.capitalize(name) %>Action {

    static loadItemsAction = () => {
        return async (dispatch: Dispatch) => {
            dispatch<ActionReducer<<%= actionType %>, <%= actionEnum %>>>({type: <%= actionEnum %>.GET_ALL, payload: {<%= name %>: []}})
        }
    }
};