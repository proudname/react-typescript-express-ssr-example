---
to: src/core/features/<%= name %>/types.ts
---
<% actionEnum =  'E' + h.capitalize(name) + 'Action' %>
<% actionType =  h.capitalize(name) + 'ReducerType' %>

export type <%= actionType %> = {
    <%= name %>: {}[]
}

export enum <%= actionEnum %> {
    GET_ALL = '<%= name %>_get_all'
}