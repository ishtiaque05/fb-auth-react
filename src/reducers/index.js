import { FB_RESPONSE } from '../constants';
let facebookResponsePayload = {
  response: null
}
export default (state = facebookResponsePayload, action) => {
  switch (action.type) {
    case FB_RESPONSE:
      const {response} = action.response;
      facebookResponsePayload = {
        response
      }
      return facebookResponsePayload;
      break;
    default:
      return state;
    }
}
