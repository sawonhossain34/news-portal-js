const fetctCetagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json()).then(data => showCetagories(data.data))
};

const showCetagories = data => {
    console.log(data);
    const cetagoriesContainer =document.getElementById('categories-container');
    data.news_category.forEach(singleCetagory => {
        // console.log(singleCetagory);
        // advance
        // cetagoriesContainer.innerHTML += `<a href="#" class="nav-link">${singleCetagory.category_name}</a>`

        // begniner
        const linkContainer =document.createElement('p');
        linkContainer.innerHTML = `<a href="#" class="nav-link" onclick ="fetchCetagoryNews('${singleCetagory.category_id}','${singleCetagory.category_name}')">${singleCetagory.category_name}</a>`;
        cetagoriesContainer.appendChild(linkContainer);
    });
};
//fatch all a news in a cetagory
const fetchCetagoryNews = (category_id ,category_name ) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showAllNews(data.data,category_name))
};

const showAllNews = (data,category_name) => {
    console.log(data,category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText =category_name;

    const newsContainer =document.getElementById('all-news');
    newsContainer.innerHTML='';
    data.forEach(singleNews => {
        const{image_url,title,details,author,total_view,_id} = singleNews;
        // newsContainer.innerHTML += ``
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3')
        card.innerHTML=` <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${image_url
            }" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${title
              }</h5>
              <p class="card-text">${details.slice(0,200)}...</p>
            </div>
            <div class="card-footer border-0 bg-body d-flex justify-content-between">
            <div class="d-flex gap-2">
            <img src="${author.img
            }" class="img-fluid rounded-circle" alt="..." width="40" height="40"/>

            <div><p class="p-0 m-0">${author.name}...</p>
            <p class="p-0 m-0">${author.published_date}...</p></div>
            </div>

            <div class="d-flex align-items-center">
            <i class="fa-solid fa-eye"></i>
            <p class="p-0 m-0">${total_view}</p></div>

            <div><i class="fas fa-star"></i></div>

            <div><i class="fas fa-arrow-right" onclick="fetchNewsDetails('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></div>

          </div>
        </div>
      </div>`;
      newsContainer.appendChild(card);
    });
};
const fetchNewsDetails = news_id => {
    let url =`https://openapi.programming-hero.com/api/news/${news_id}`
    // console.log(url);
    fetch(url).then(res => res.json()).then(data => console.log(data.data[0]))
    // console.log(data.data[0]);
}

const showNewsDetails = (newsDetails) => {
    const{image_url,title,details,author,total_view,_id} = singleNews;
    document.getElementById('exampleModal').innerHTML =`
   
    `
}