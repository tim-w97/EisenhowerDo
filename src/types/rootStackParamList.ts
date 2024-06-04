// Define parameters for each route

// My routes don't have any parameters because they communicate
// via the redux store to each other
export type RootStackParamList = {
  // Onboarding
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;

  // Todo-related screens
  AddTodo: undefined;
  EditTodo: undefined;
  MyTodos: undefined;
  TodoDetails: undefined;
  ShareTodo: undefined;

  // Authentication
  Login: undefined;
};
