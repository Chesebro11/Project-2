async function deleteFormHandler(event) {
    event.preventDefault();

    // const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${post_id}`, {method: 'DELETE'});

    if (response.ok) {
        document.location.replace('/dashboard/');
    }else {
        alert(response.statusText);
    }
    }
  
  

  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  