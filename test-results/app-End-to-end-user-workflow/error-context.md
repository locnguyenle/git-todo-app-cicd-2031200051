# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.js >> End-to-end user workflow
- Location: tests\e2e\app.spec.js:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#add-btn')

```

# Test source

```ts
  1  | const { test, expect, _electron: electron } = require('@playwright/test');
  2  | 
  3  | test('End-to-end user workflow', async () => {
  4  |     // Launch the Electron app
  5  |     const electronApp = await electron.launch({ args: ['.'] });
  6  |     const window = await electronApp.firstWindow();
  7  | 
  8  |     const taskText = 'My new E2E test task';
  9  | 
  10 |     // --- TODO: Task 1: Add a new todo item ---
  11 |     // 1. Find the input field (use a locator like window.locator('#todo-input')).
  12 |     const input = window.locator('#todo-input');
  13 | 
  14 |     // 2. Type the `taskText` into it.
  15 |     await input.fill(taskText);
  16 | 
  17 |     // 3. Find and click the "Add" button.
> 18 |     await window.locator('#add-btn').click();
     |                                      ^ Error: locator.click: Target page, context or browser has been closed
  19 | 
  20 | 
  21 |     // --- TODO: Task 2: Verify the todo item was added ---
  22 |     // 1. Locate the new todo item in the list. A good locator might be `window.locator('.todo-item')`.
  23 |     const todoItem = window.locator('.todo-item').first();
  24 | 
  25 |     // 2. Assert that its text content contains the `taskText`.
  26 |     await expect(todoItem).toContainText(taskText);
  27 | 
  28 | 
  29 |     // --- TODO: Task 3: Mark the todo item as complete ---
  30 |     // 1. Find the checkbox within the new todo item.
  31 |     const checkbox = todoItem.locator('input[type="checkbox"]');
  32 | 
  33 |     // 2. Click the checkbox.
  34 |     await checkbox.click();
  35 | 
  36 |     // 3. Assert that the todo item now has the 'completed' class.
  37 |     await expect(todoItem).toHaveClass(/completed/);
  38 | 
  39 | 
  40 |     // --- TODO: Task 4: Delete the todo item ---
  41 |     // 1. Find the delete button within the todo item.
  42 |     const deleteBtn = todoItem.locator('.delete-btn');
  43 | 
  44 |     // 2. Click the delete button.
  45 |     await deleteBtn.click();
  46 | 
  47 |     // 3. Assert that the todo item is no longer visible on the page.
  48 |     await expect(todoItem).not.toBeVisible();
  49 | 
  50 | 
  51 |         // Close the app
  52 |         await electronApp.close();
  53 |     });
  54 | 
```