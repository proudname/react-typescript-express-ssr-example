---
to: src/core/features/<%= name %>/components/<%= h.capitalize(name) %>Container.tsx
---
<% actionEnum =  'E' + h.capitalize(name) + 'Action' %>
<% actionType =  h.capitalize(name) + 'ReducerType' %>

import { Component } from 'react';
import { connect } from 'react-redux';
import { <%= actionType %> } from '../types';

type LocalProps = {

}

type LocalState = {

}

class <%= h.capitalize(name) %>Container extends Component<LocalProps, LocalState> {

    render() {
        return null;
    }

}


export default connect<{}, {}, {}, <%= actionType %>>(state => state.<%= name %>)(<%= h.capitalize(name) %>Container);