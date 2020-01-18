const cherryApp = {};
cherryApp.apikey = '7cac5b64f68f7697157b5bd9a4a7ef5e';
cherryApp.result = $('.results');

cherryApp.displayCherry = function(movieData){
    movieData.forEach(function(movie){
        if(movie.poster_path!== null){
              console.log(movieData)
        const imageURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`;
        const htmlToAppend = `
            <div class = 'movie-box'>
                <div class = 'moviepic'>
                    <img src='${imageURL}' alt='${movie.original_title}'>
                </div>
                <div class = 'words'>
                    <a href="https://www.themoviedb.org/movie/${movie.id}?language=en-Us" alt='${movie.orinigal_title}'>${movie.original_title}</a>
                    <p class = 'description'>${movie.overview}</p>
                </div>
                <div style = 'clear: both'></div>
            </div>
        `;
        $('.results').append(htmlToAppend);
        }
       
    });
}

cherryApp.getMovies = function(userInput){
     $.ajax({
        url: `https://api.themoviedb.org/3/search/movie`,
        method: 'GET',
        dataType: 'json',
        data: {
            api_key: cherryApp.apikey,
            query: userInput, 
        }
    }).then(function(response){
        cherryApp.displayCherry(response.results);

    });
}

cherryApp.init = function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const userInput = $('#search-input').val();
        $('.results').empty();
       
        cherryApp.getMovies(userInput);
       
    });
};

$(function(){
    cherryApp.init();
});

console.log('hi')