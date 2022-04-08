const apiConfig = {

    baseUrl : 'https://api.themoviedb.org/3',
    apiKey : 'c89646cb9c2f9f7a6144c074fff0e9c7',
    originalImage : (imagePath) => 'https://image.tmdb.org/t/p/original/${imgPath}',
    w500Image : (imagePath) => 'https://image.tmdb.org/t/p/w500/${imagePath}',
}

export default apiConfig;