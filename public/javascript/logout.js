async function logout() {
    const response = await fetch('/api/users/logout', {
<<<<<<< HEAD
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#dipcity').addEventListener('click', logout);
  
=======
        method: 'post'
    });

    if(response.ok) {
        document.location.replace('/');
    } else {
    alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> f716cfea19f7dfd572f556b8a2182df1a4157363
