export const enviroment = {
    API_URL: 'https://api.spotify.com/v1/',
    AUTH_TOKEN: localStorage.getItem('tokenSpotify'),
    CLIENT_ID: '4d1173d88fbc4dfe8c915a2f3b6f7b46',
    CLIENT_SECRET:  'e15a8993790047cbbe70069bc03dd537',
    REDIRECT_URI: 'http://localhost:8888/callback/',
    SCOPE: 'user-read-private user-read-email'
}