const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const instagramFeed = document.getElementById("feed")

for (let i = 0; i < posts.length;i++){

    let postLiked = false

   const div1 = document.createElement("div")
   const cardClass = document.createAttribute("class")
   cardClass.value = "card"
   div1.setAttributeNode(cardClass)


   instagramFeed.append(div1)


   const postHeaderSection = document.createElement("section")
   const postHeaderClass = document.createAttribute("class")
   postHeaderClass.value = "post-header"
   postHeaderSection.setAttributeNode(postHeaderClass)
   div1.append(postHeaderSection)



   const postHeaderAvatar = document.createElement("img")
   const postHeaderAvatarSrc = document.createAttribute("src")
   postHeaderAvatarSrc.value = posts[i].avatar
   const avatarClass = document.createAttribute("class")
   avatarClass.value = "avatar"
   postHeaderAvatar.setAttributeNode(avatarClass)
   postHeaderAvatar.setAttributeNode(postHeaderAvatarSrc)

   postHeaderSection.append(postHeaderAvatar)

  const postHeaderTextDiv = document.createElement("div")
  postHeaderSection.append(postHeaderTextDiv)
  const postHeaderTextClass = document.createAttribute("class")
  postHeaderTextClass.value = "post-header-text"
  postHeaderTextDiv.setAttributeNode(postHeaderTextClass)

  const userName = document.createElement("h5")
  postHeaderTextDiv.append(userName)
  userName.textContent = posts[i].name


  const location = document.createElement("h5")
  postHeaderTextDiv.append(location)
  location.textContent = posts[i].location

 const main = document.createElement("main")
 div1.append(main)

 const mainPostImg = document.createElement("img")
 const mainPostImgSrc = document.createAttribute("src")
 mainPostImgSrc.value = posts[i].post
 const mainPostImgClass = document.createAttribute("class")
 mainPostImgClass.value = "post-img"
 mainPostImg.setAttributeNode(mainPostImgClass)
 mainPostImg.setAttributeNode(mainPostImgSrc)
 main.append(mainPostImg)
 mainPostImg.addEventListener("dblclick", () => {
    postLiked = true
 

    if (postLiked) {
       heartIconSrc.value = "/Images/icon-heart-liked.png"
       likes.textContent = `${posts[i].likes + 1} likes`

    } else {
        heartIconSrc.value = "/Images/icon-heart.png"
        likes.textContent = `${posts[i].likes} likes`
    }

 })


 const postBottomSection = document.createElement("section")
 div1.append(postBottomSection)

 const iconsDiv = document.createElement("div")
 postBottomSection.append(iconsDiv)
 const iconsClass = document.createAttribute("class")
 iconsClass.value = "icons"
 iconsDiv.setAttributeNode(iconsClass)


 const heartIcon = document.createElement("img")
 iconsDiv.append(heartIcon)
 const heartIconSrc = document.createAttribute("src")
 heartIconSrc.value = "/Images/icon-heart.png" 
heartIcon.setAttributeNode(heartIconSrc)
heartIcon.addEventListener("click", () => {
    postLiked = !postLiked
 

    if (postLiked) {
       heartIconSrc.value = "/Images/icon-heart-liked.png"
       likes.textContent = `${posts[i].likes + 1} likes`

    } else {
        heartIconSrc.value = "/Images/icon-heart.png"
        likes.textContent = `${posts[i].likes} likes`
    }

   
})
    



const commentIcon = document.createElement("img")
iconsDiv.append(commentIcon)
const commentIconSrc = document.createAttribute("src")
commentIconSrc.value = "/Images/icon-comment.png" 
commentIcon.setAttributeNode(commentIconSrc)

const dmIcon = document.createElement("img")
iconsDiv.append(dmIcon)
const dmIconSrc = document.createAttribute("src")
dmIconSrc.value = "/Images/icon-dm.png" 
dmIcon.setAttributeNode(dmIconSrc)



const bottomTextDiv = document.createElement("div")
postBottomSection.append(bottomTextDiv)

const likes = document.createElement("p")
bottomTextDiv.append(likes)
const boldClass = document.createAttribute("class")
boldClass.value = "bold"
likes.setAttributeNode(boldClass)

likes.textContent = `${posts[i].likes} likes`


const postEntryText = document.createElement("p")
bottomTextDiv.append(postEntryText)
const postEntryTextSpan = document.createElement("span")
postEntryText.append(postEntryTextSpan)
const boldUser = document.createAttribute("class")
boldUser.value = "bold"
postEntryTextSpan.setAttributeNode(boldUser)
postEntryTextSpan.textContent = posts[i].username
const commentTextNode = document.createTextNode(" " + posts[i].comment);
postEntryText.append(commentTextNode);





}