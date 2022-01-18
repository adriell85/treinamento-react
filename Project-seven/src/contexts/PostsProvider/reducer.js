import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCESS: {
      return { ...state, posts: action.payload };
    }
  }
  return { ...state };
};
