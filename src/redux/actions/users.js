'use strict';

import Types from './actionTypes';

export const profileCreated = user => (
  {
    type: Types.PROFILE_CREATED,
    payload: {
      user: user,
    },
  }
);
