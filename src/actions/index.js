import { FB_RESPONSE } from '../constants';

export function fbSuccessResponse(response) {
  const action = {
    type: FB_RESPONSE,
    response
  }
  return action;
}
