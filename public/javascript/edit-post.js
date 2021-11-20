async function editFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
   
    if(comment_text) {
        const response = await fetch('/api/posts/${id}',{ 
            method: 'PUT', 
            body: JSON.stringify({
                post_id,
                edit_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
  }
  

  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);