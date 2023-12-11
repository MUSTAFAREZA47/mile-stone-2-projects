document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
  
    blogForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const poster = document.getElementById('poster').value;
      const description = document.getElementById('description').value;
      const content = document.getElementById('content').value;
  
      const newBlog = {
        title,
        poster,
        description,
        content
      };
  
      let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
      existingBlogs.push(newBlog);
      localStorage.setItem('blogs', JSON.stringify(existingBlogs));
  
      window.location.href = 'home.html'; 
    });
  });
  

  