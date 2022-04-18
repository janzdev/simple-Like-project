let like = document.querySelector("#like")
let like_count = document.querySelector("#like_count")
let count= 0

like.addEventListener("click", () => {
  count+=1
  console.log(count)
  like_count.innerHTML=count
})
