---
to: src/core/features/<%= name %>/reducer.ts
---
<% actionEnum =  'E' + h.capitalize(name) + 'Action' %>
<% actionType =  h.capitalize(name) + 'ReducerType' %>

import {<%= actionType %>, <%= actionEnum %>} from "./types";

export const reducer = (state = {<%= name %>: []}, action: ActionReducerType<<%= actionType %>, <%= actionEnum %>>) => {
    switch (action.type) {
        case <%= actionEnum %>.GET_ALL:
            return {...state, ...action.payload};
        default:
            return state
    }
};