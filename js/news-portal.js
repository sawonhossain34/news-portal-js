const fetctCetagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json()).then(data => showCetagories(data.data))
};

const showCetagories = data => {
    console.log(data);
    const cetagoriesContainer =document.getElementById('categories-container');
    data.news_category.forEach(singleCetagory => {
        console.log(singleCetagory);
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
}