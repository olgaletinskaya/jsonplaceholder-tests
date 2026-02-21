const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API Tests', () => {

  // ------------------- GET запит 1 -------------------
  test('GET /posts/1 - перевірка status та title', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.userId).toBe(1);
    expect(response.data.title).toBeDefined();
  });

  // ------------------- GET запит 2 -------------------
  test('GET /users/1 - перевірка status та name', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data.name).toBe('Leanne Graham');
  });

  // ------------------- POST запит 1 -------------------
  test('POST /posts - створення нового посту', async () => {
    const newPost = {
      title: 'Мій новий пост',
      body: 'Це тестовий пост',
      userId: 1
    };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  // ------------------- POST запит 2 -------------------
  test('POST /comments - створення нового коментаря', async () => {
    const newComment = {
      name: 'Ольга',
      email: 'olga@test.com',
      body: 'Це тестовий коментар',
      postId: 1
    };
    const response = await axios.post(`${BASE_URL}/comments`, newComment);
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(newComment.name);
    expect(response.data.body).toBe(newComment.body);
    expect(response.data.postId).toBe(newComment.postId);
  });

  // ------------------- POST запит 3 -------------------
  test('POST /todos - створення нового todo', async () => {
    const newTodo = {
      title: 'Завдання на завтра',
      completed: false,
      userId: 1
    };
    const response = await axios.post(`${BASE_URL}/todos`, newTodo);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newTodo.title);
    expect(response.data.completed).toBe(newTodo.completed);
    expect(response.data.userId).toBe(newTodo.userId);
  });

});