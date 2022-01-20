import P from 'prop-types';
import { PostsContext } from './context';

export const PostsProvider = ({ children }) => {
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

PostsProvider.prototypes = {
  children: P.element.isRequired,
};
