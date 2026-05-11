let posts =
JSON.parse(localStorage.getItem("posts")) || [];

const postForm =
document.getElementById("postForm");

if(postForm){

postForm.addEventListener("submit",(e)=>{

e.preventDefault();

const title =
document.getElementById("title").value;

const content =
document.getElementById("content").value;

if(title === "" || content === ""){
alert("Complete todos los campos");
return;
}

const post = {
id: Date.now(),
title,
content,
date: new Date().toLocaleDateString()
};

posts.push(post);

localStorage.setItem(
"posts",
JSON.stringify(posts)
);

postForm.reset();

renderPosts();

});

}
function renderPosts(){

const container =
document.getElementById("postsContainer");

container.innerHTML = "";
document.getElementById("totalPosts").textContent =
posts.length;

posts.forEach(post => {

container.innerHTML += `

<div class="post-card">

<img
class="post-image"
src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200"
>

<div class="post-content">

<h3>${post.title}</h3>

<p>${post.content}</p>

<small>${post.date}</small>

<br><br>

<div class="post-buttons">

<button
class="edit-btn"
onclick="editPost(${post.id})">
Editar
</button>

<button
class="delete-btn"
onclick="deletePost(${post.id})">
Eliminar
</button>

</div>

</div>

</div>

`;

});
}

renderPosts();
document.getElementById("totalPosts").textContent =
posts.length;
function deletePost(id){

posts = posts.filter(post =>
post.id !== id
);

localStorage.setItem(
"posts",
JSON.stringify(posts)
);

renderPosts();

}
function editPost(id){

const post =
posts.find(post => post.id === id);

document.getElementById("title").value =
post.title;

document.getElementById("content").value =
post.content;

deletePost(id);

}