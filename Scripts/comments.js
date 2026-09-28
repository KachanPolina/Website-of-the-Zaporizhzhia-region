const pageId = document.body.dataset.page;

const form = document.getElementById('comment-form');
const loginInput = document.getElementById('login');
const commentInput = document.getElementById('comment-text');
const commentsList = document.getElementById('comment-list');

const API_URL = 'http://localhost:3000/comments';

async function loadComments() {
  const response = await fetch(`${API_URL}?page=${pageId}`);
  const comments = await response.json();
  displayComments(comments);
}

function displayComments(comments) {
  commentsList.innerHTML = '';

  comments.forEach((comment) => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
            <h3>${comment.login}</h3>
            <p>${comment.text}</p>
            <small>${comment.date}</small>
        `;
    commentsList.appendChild(commentElement);
  });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const login = loginInput.value.trim();
  const text = commentInput.value.trim();

  if (!login || !text) {
    return;
  }

  const newComment = {
    page: pageId,
    login: login,
    text: text,
    date: new Date().toLocaleDateString('uk-UA'),
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  });

  if (response.ok) {
    form.reset();
    loadComments();
  }
});

loadComments();
