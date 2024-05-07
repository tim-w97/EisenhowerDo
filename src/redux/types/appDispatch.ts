// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
import {store} from '../store.ts';

export type AppDispatch = typeof store.dispatch;
