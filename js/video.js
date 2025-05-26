// creat loadCategories
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then( (res) => res.json())
    .then( (data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
}

// how to know time
function getTime(time){
    const hour = parseInt(time / 3600);
    let second = time % 3600;
    const minute = parseInt(second / 60);
    second = second % 60;
    return `${hour} hour ${minute} minute ${second} second ago `
}
//  work latter
// console.log(getTime(189))

// creat loadVideos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then( (res) => res.json())
    .then( (data) => displayVideo(data.videos))
    .catch((error) => console.log(error))
}

// function remove class
    const removeClass = () => {
        const buttons = document.getElementsByClassName('category-btn');
        // console.log(buttons)
        for(let btn of buttons){
            btn.classList.remove('active')
        }
    }

// category Id
const loadCategoriesVideos = (id) =>{
    // alert(id)
    
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then( (res) => res.json())
    .then( (data) => {
        // remove class
        removeClass()

        // add class
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add('active')
        displayVideo(data.category)
    })
    .catch((error) => console.log(error))
}

// 
const demo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
// 

const displayVideo = (videos) =>{
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML="";

    if (videos.length === 0) {
        videosContainer.classList.remove('grid')
            videosContainer.innerHTML= `
            <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center ">
                <img src="assets/icon.png" />
                <h2 class="text-center text-xl font-bold">
                Oops!! Sorry, There is nocontent here
                </h2>
            </div>
            `;
    }else{
        videosContainer.classList.add('grid')
    }

    // creat forEach for item
    videos.forEach((video)=> {
        console.log(video)

        const card = document.createElement('div');
        card.classList = 'card card-compact '
        card.innerHTML = 
        `
    <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class=" w-full h-full object-cover"
      alt="Shoes" />
      ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute bg-black text-white right-2 bottom-2 p-2 rounded-full text-xs">${getTime(video.others.posted_date)}</span>`}
     
  </figure>
  <div class="px-0 py-2 flex gap-5">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>

    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400"> ${video.authors[0].profile_name}</p>
    ${video.authors[0].verified === true ? '<img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"/>' : '' }    

    </div>
    <p> </p>
    </div>

  </div>
        `
        videosContainer.appendChild(card)
    })


}

// creat displayCategories
const displayCategories = (data) => {
    const categoryContainer = document.getElementById('categories');

    // creat forEach for item
    data.forEach( (item) => {
        console.log(item)

        // creat a button 
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoriesVideos(${item.category_id})" 
        class="btn category-btn"> ${item.category}</button>
        `

        // add button inside the categoryContainer
        categoryContainer.appendChild(buttonContainer)
    });
}


loadCategories()
loadVideos()