document.addEventListener("DOMContentLoaded", function () {
    // Fetching posts
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            const blogList = document.getElementById("blog-list");
            data.forEach((blog) => {
                createBlogItem(blogList, blog);
            });

            // Adding event listeners to delete buttons
            const deleteButtons = document.getElementsByClassName("delete-btn");
            for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener("click", deleteBlog);
            }
        });

    // Add new blog
    const addBlogForm = document.getElementById("add-blog-form");
    addBlogForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const title = document.getElementById("blog-title").value;
        const content = document.getElementById("blog-content").value;

        const newBlog = {
            title: title,
            body: content,
        };

        // Posting new blog on api
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBlog),
        })
            .then((response) => response.json())
            .then((data) => {
                const blogList = document.getElementById("blog-list");
                createBlogItem(blogList, data, true);

                // Clear the form inputs
                document.getElementById("blog-title").value = "";
                document.getElementById("blog-content").value = "";
            });
    });

    // Delete blog
    function deleteBlog() {
        const blogId = this.getAttribute("data-id");
        const blogItem = this.parentElement;
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    blogItem.remove();
                } else {
                    console.log("Failed to delete the blog");
                }
            })
            .catch((error) => {
                console.log("An error occurred:", error);
            });
    }

    // Create blog item
    function createBlogItem(blogList, blog, prepend = false) {
        const blogItem = document.createElement("div");
        blogItem.classList.add("blog");
        blogItem.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.body}</p>
        <button class="delete-btn" data-id="${blog.id}">Delete</button>
      `;

        if (prepend) {
            blogList.prepend(blogItem); // Add blog item at the beginning
        } else {
            blogList.appendChild(blogItem); // Add blog item at the end
        }

        const deleteButton = blogItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", deleteBlog);
    }
});
