const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

   test('should add a new todo', () => {
 
        service.addTodo('Học Design Patterns');

        expect(service.todos.length).toBe(1);

        const todoText = service.todos[0].text || service.todos[0].title;
        
        expect(todoText).toBe('Học Design Patterns');
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        service.addTodo('Viết Unit Test');
        // Then, get its ID and call the toggleTodoComplete method.
        const todoId = service.todos[0].id;
        // Assert that the 'completed' property of that todo is now true.
        service.toggleTodoComplete(todoId);
        expect(service.todos[0].completed).toBe(true);
        // Call toggleTodoComplete again and assert that it's false.
        service.toggleTodoComplete(todoId);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        service.addTodo('Nộp bài Lab 3');
        const todoId = service.todos[0].id;
        // Get its ID and call the removeTodo method.
        service.removeTodo(todoId);
        // Assert that the service's todos array is now empty (length of 0).
        expect(service.todos.length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        service.addTodo('');
        // Assert that the todos array still has a length of 0.
        expect(service.todos.length).toBe(0);
    });
});
