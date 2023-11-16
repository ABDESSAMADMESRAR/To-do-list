// upload To do list

const button = document.querySelector("button");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const input = document.querySelector("input");
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `  <div class="task">  
<h2 class="tas">${input.value}</h2>
  <i class="fa-solid fa-trash-can trash"></i>
  <i class="fa-solid fa-star star"></i>
  <i class="fa-solid fa-face-angry angry"></i>
</div>`;

  container.innerHTML += task;
  input.value = "";
});
// to survey To do list
container.addEventListener("click", (eo) => {
  // if (eo.target.className == "fa-solid fa-trash-can trash") {
  //   eo.target.parentElement.remove();
  // } else if (eo.target.className == "fa-solid fa-face-angry angry") {
  //   eo.target.style.display = "none";
  //   const heart = `<i class="fa-solid fa-heart heart"></i>`;
  //   eo.target.parentElement
  //     .getElementsByClassName("tas")[0]
  //     .classList.add("task2");

  //   eo.target.parentElement.innerHTML += heart;
  // }else if (eo.target.className == "fa-solid fa-heart heart") {
  //   eo.target.parentElement
  //   .getElementsByClassName("tas")[0]
  //   .classList.remove("task2");
  //   eo.target.classList.add("heart")
  //   const angry = `<i class="fa-solid fa-face-angry angry"></i>`;
  //   eo.target.parentElement.innerHTML += angry ;

  // }else if(eo.target.className == "fa-solid fa-star star"){
  //   container.prepend(eo.target.parentElement)
  // }

  switch (eo.target.className) {
    case "fa-solid fa-trash-can trash":
      eo.target.parentElement.remove();
      break;
    case "fa-solid fa-face-angry angry":
      eo.target.style.display = "none";
      const heart = `<i class="fa-solid fa-heart heart"></i>`;
      eo.target.parentElement
        .getElementsByClassName("tas")[0]
        .classList.add("task2");

      eo.target.parentElement.innerHTML += heart;

      break;
    case "fa-solid fa-heart heart":
      eo.target.parentElement
        .getElementsByClassName("tas")[0]
        .classList.remove("task2");
      eo.target.classList.add("heart");
      const angry = `<i class="fa-solid fa-face-angry angry"></i>`;
      eo.target.parentElement.innerHTML += angry;
      break;
    case "fa-solid fa-star star":
      container.prepend(eo.target.parentElement);
      break;

    default:
      break;
  }
});
