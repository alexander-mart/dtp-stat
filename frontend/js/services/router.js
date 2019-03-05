import {Action, History, Location, LocationDescriptorObject} from 'history'

import * as query_string from 'query-string'


export default class Router {
    constructor(history) {
        this.history = history;
        this.current_state = null
        this.history.listen(this.on_location_change)
    }

    on_location_change(location, action){
        if (action === 'POP')
            this.location_changed.emit(this._get_params(location))
    };

    get_params() {
        return this._get_params(this.history.location)
    }

    _get_params(location) {
        return query_string.parse(location.search);
    }

    set_params(params, replace = false) {
        const pathname = ''
        const state = {
            pathname,
            search: query_string.stringify(params),
        }

        if (this.current_state && this.current_state.search === state.search)
            return

        this.current_state = state
        if (replace)
            this.history.replace(state)
        else
            this.history.push(state)
    }
}