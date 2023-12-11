document.addEventListener('DOMContentLoaded', function () {
  const blogList = document.getElementById('blogList');

  // Retrieve blogs from localStorage
  const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
  displayBlogs(existingBlogs);

  function displayBlogs(blogs) {
    blogList.innerHTML = '';

    if (blogs.length === 0) {
      blogList.innerHTML = '<p>No blogs found.</p>';
      return;
    }

    blogs.forEach((blog, index) => {
      const blogItem = document.createElement('div');
      blogItem.classList.add('mb-4', 'p-4', 'bg-white', 'rounded', 'shadow');

      blogItem.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">${blog.title}</h2>
        <img src="${blog.poster}" alt="${blog.title}" class="mb-2 rounded">
        <p>${blog.description}</p>
        <a href="read-blog.html" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Read More</a>
      `;

      blogList.appendChild(blogItem);
    });
  }
});
