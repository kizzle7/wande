import {combineReducers} from 'redux';
import issueReducer from './issue';
import terminalReducer from './terminal'
import vendorReducer from './vendor'
import incidentReducer from './incident'
import userReducer from './user'
export default combineReducers({
    terminal: terminalReducer,
    issue: issueReducer,
    vendor: vendorReducer,
    incident: incidentReducer,
    users: userReducer
});