// console.log("welcome");
// nidhip.surbhiinfotech@gmail.com
// 3052a09c79ee4b8f88fe528d5303ca48
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=3052a09c79ee4b8f88fe528d5303ca48


// Initialize the news api parameters
let source = 'bbc-news';
// let source = 'the-times-of-india';
let apiKey = '3052a09c79ee4b8f88fe528d5303ca48'

// Grap the news container
let newsAcodion = document.getElementById('newsAcodion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// console.log(source);

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";

        articles.forEach(function (element, index) {

            // console.log(element, index);
            let news = `
                        <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collaps${index}">
                                        <b>Braking News ${index + 1}:</b> ${element["title"]}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAcodion">
                                <div class="card-body">
                                   ${element["content"]}.<a href="${element["url"]}" target="_blank" > Read more here</a>
                                </div>
                            </div>
                        </div> `;

            newsHtml += news;
        });
        newsAcodion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}


xhr.send();





