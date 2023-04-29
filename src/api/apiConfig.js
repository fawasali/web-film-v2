const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a86aa2d580dc8a751c2474f483a22e1c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/originil/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig; 
