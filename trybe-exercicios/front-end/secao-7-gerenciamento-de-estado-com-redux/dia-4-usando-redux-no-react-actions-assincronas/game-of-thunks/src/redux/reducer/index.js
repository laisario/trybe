import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from "../actions/index";

const INITIAL_STATE = {
  isLoading: false,
  characters: [],
  search: '',
  error: '',
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_STARTED:
			return {
				...state,
				isLoading: true,
        search: '',
			};
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        characters: [],
        error: action.payload,
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload,
      };
		default:
			return state;
	}
}

export default reducer;