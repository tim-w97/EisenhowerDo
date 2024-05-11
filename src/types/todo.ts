type Todo = {
  // ID of the Todo (UUID v4)
  id: string;

  // the title of the Todo
  title: string;

  // the text of the Todo
  text: string;

  // is this Todo important?
  isImportant: boolean;

  // is this Todo urgent?
  isUrgent: boolean;

  // category of the Todo
  categoryID: number;
};

export default Todo;
