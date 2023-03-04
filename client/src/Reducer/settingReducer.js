import {
  UPDATE_SETTING,
  GET_SETTING,
} from "../../src/app/modules/actions/Settings/types";

const initState = {
  setting: null,
  loading: true,
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SETTING:
    case GET_SETTING:
      return {
        ...state,
        setting: payload,
        loading: false,
      };

    default:
      return state;
  }
}
