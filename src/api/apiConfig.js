const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '8ec5b297214f54b6b32434b2a83b559e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}

export default apiConfig; 
