const articleData = [
  {
    title: "Lambda School Students:",
  date: "Nov 5th, 2017",
  blog: " moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon. "
        },

        {
          title: "Javascript and You, ES6",
        date: "Nov 7th, 2017",
        blog: " moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn jar twi'lek jinn leia jango skywalker mon. "
              }


]


const grabArticleSection = document.querySelector('.articles');
articleData.forEach(data=> {
  grabArticleSection.appendChild(createArticleComponent(data.title, data.date, data.blog))
})

//grabArticleSection.appendChild(createArticleComponent('hello world', 'My there'))
function createArticleComponent(title, date, blog){
  const articleSection = document.createElement('div');
  const articleTitle= document.createElement('h2');
  const dateParagraph= document.createElement('p');
  const articleParagraph= document.createElement('p');
  const expandButton= document.createElement('span');
  const closeButton= document.createElement('span');
  
  articleSection.appendChild(articleTitle)
  articleSection.appendChild(dateParagraph);
  articleSection.appendChild(articleParagraph)
  articleSection.appendChild(expandButton)
  expandButton.appendChild(closeButton)

  articleSection.classList.add('article');
  dateParagraph.classList.add('date')
  expandButton.classList.add('expandButton')
  closeButton.classList.add('closeButton')

  expandButton.innerText='expand';
  closeButton.innerText='close';

  articleTitle.innerText= title;
  dateParagraph.innerText = date;
  articleParagraph.innerText = blog;

  expandButton.addEventListener('click', event =>{
console.log('Button clicked')
//expandButton.classList.toggle('close')
//closeButton.classList.toggle('close')
if (event.target.innerText === 'expand'){
  event.target.innerText = 'close';
  //articleSection.classList.toggle('article-open')
}
else if (event.target.innerText === 'close'){
  event.target.innerText = 'expand';
  //articleSection.classList.toggle('article-open')
}

articleSection.classList.toggle('article-open')


  })



  return articleSection

}