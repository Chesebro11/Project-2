async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="floatingTextarea"]').value;
    const post_content = document.querySelector('floatingTextarea2"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#post-submit-button').addEventListener('submit', newFormHandler);

<script src="/public/javascript/add-post.js"></script>
