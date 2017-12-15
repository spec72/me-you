import Types from './actionTypes';

export const imageSet = source => (
  {
    type: Types.IMAGE_SET,
    payload: {
      image: source
    },
  }
);

export const affirmationSet = affirmation => (
  {
    type: Types.AFFIRMATION_SET,
    payload: {
      affirmation: affirmation
    },
  }
);