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

posts.forEach(post => {

container.innerHTML += `

<div class="post-card">

<h3>${post.title}</h3>

<p>${post.content}</p>

<small>${post.date}</small>

<br><br>

<button onclick="editPost(${post.id})">
Editar
</button>

<button onclick="deletePost(${post.id})">
Eliminar
</button>

</div>

`;

});

}

renderPosts();
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