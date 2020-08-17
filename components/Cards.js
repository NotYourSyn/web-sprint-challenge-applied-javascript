// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function createCard(obj){

    //create elements
    const card = document.createElement('div');
    const headlineCont = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    // adding classes 
    card.classList.add('card');
    headlineCont.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    // adding Content
    headlineCont.textContent = obj.headline;
    img.src = obj.authorPhoto;
    name.textContent = 'By' + obj.authorName;

    //appending to DOM 
    card.appendChild(headlineCont);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(name);

    return card;

}

axios.get(' https://lambda-times-api.herokuapp.com/articles')
     .then(res =>{
         const cardsContainer = document.querySelector('.cards-container');
        const arrayValues = Object.values(res.data.articles);
        arrayValues.forEach(e => {
            e.forEach(article => {
                cardsContainer.appendChild(createCard(article));
            })
        })
     })   
     .catch(err =>{
         console.log('This is an Error:', err);
     });