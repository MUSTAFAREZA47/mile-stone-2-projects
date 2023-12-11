document.addEventListener('DOMContentLoaded', function() {
    const blogPost = document.getElementById('blogPost');
  
    // Get blog ID from URL query params
    const queryParams = new URLSearchParams(window.location.search);
    const blogId = queryParams.get('id');
    console.log(blogId)
  
    // Retrieve blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
  
    // Display individual blog post
    if (blogId !== null && blogId >= 0 && blogId < existingBlogs.length) {
      const blog = existingBlogs[blogId];
      blogPost.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">${blog.title}</h2>
        <img src="${blog.poster}" alt="${blog.title}" class="mb-4 rounded">
        <p class="mb-4">${blog.content}</p>
        <a href="index.html" class="bg-blue-500 text-white px-4 py-2 rounded">Back to Home</a>
      `;
    } else {
      blogPost.innerHTML = '<p>Invalid blog post.</p>';
    }
  });