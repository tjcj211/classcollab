window.onload = () => {
    const { access_token } = getHashParams();

    // Ignore the woah thing for now
    if (!woah() && access_token) {
        const signInMessage = document.getElementById('sign-in');
        // attempted to signin
        SpotifyAPI.setToken(access_token)
            .then(data => {
                // Valid token
                // Hide sign in screen
                signInMessage.remove();

                // get some DOM elements the old fashioned way
                const usernameEl = document.getElementById('username');
                const topTracksEl = document.getElementById('top-tracks');
                const topArtistsEl = document.getElementById('top-artists');

                // Set the username
                usernameEl.innerHTML = data.display_name;

                // Fetch top tracks and populate DOM (this is old fashioned stuff here)
                SpotifyAPI.getTopTracks()
                    .then(data => {
                        for (let i = 0; i < data.items.length; i++) {
                            const trackRow = document.createElement('li');
                            const trackName = document.createElement('h3');
                            const trackImg = document.createElement('div');

                            trackName.innerText = data.items[i].name;
                            trackImg.style.background = 'url("' + data.items[i].album.images[0].url + '")';

                            trackRow.append(trackImg);
                            trackRow.append(trackName);
                            topTracksEl.append(trackRow);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        topTracksEl.innerText = 'Error fetching your top tracks!';
                    });

                // Fetch top artists. It's not that old fashioned when you consider the notation
                SpotifyAPI.getTopArtists()
                    .then(data => {
                        for (let i = 0; i < data.items.length; i++) {
                            const artistRow = document.createElement('li');
                            const artistName = document.createElement('h3');
                            const artistImg = document.createElement('div');

                            artistName.innerText = data.items[i].name;
                            artistImg.style.background = 'url("' + data.items[i].images[0].url + '")';

                            artistRow.append(artistImg);
                            artistRow.append(artistName);
                            topArtistsEl.append(artistRow);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        topArtistsEl.innerText = 'Error fetching your top tracks!';
                    });
            })
            .catch(err => {
                // Invalid token
                console.log(err);
                window.location = '/rpetrosino';
            });
    } else if (!woah()) {
        // no attempt to signin
        const signedInMessage = document.getElementById('signed-in');

        // hide signed in screen
        signedInMessage.remove();

        const login = document.getElementById('login-button');
        login.onclick = SpotifyAPI.authorize;
    }

    // Woah stuff
    if (woah()) {
        window.woah('woah');
        let woah = 'woah';
        setInterval(() => {
            document.getElementsByTagName('woah')[0].className = woah === 'woah' ? woah : '';
            woah = woah !== 'woah' ? 'woah' : 'not woah';
        }, 500);
    }
};

// Spotify makes this insanely easy
const SpotifyAPI = {
    access_token: null,
    authorize: () => {
        // Client ID isn't sensitive. This authorization is entirely client-side,
        // if you wanted to use backend authorization, you'd need a client secret.
        const url =
            'https://accounts.spotify.com/authorize?' +
            'client_id=cbd004150cb0442e80bb38b6e8591ca4&' +
            'response_type=token&' +
            'redirect_uri=' +
            encodeURIComponent('http://localhost:3000/rpetrosino') +
            '&' +
            'scope=' +
            encodeURIComponent('user-top-read');

        // Redirect to spotify for auth
        window.location = url;
    },
    setToken: token => {
        // This is the client-side verification that the access token actually works
        return new Promise((resolve, reject) => {
            // Test fetch to see if access token works
            fetch('https://api.spotify.com/v1/me', {
                method: 'get',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) reject(data.error);
                    else {
                        this.access_token = token;
                        resolve(data);
                    }
                })
                .catch(err => reject(err));
        });
    },
    /*
     * The only differences between the next two functions are the endpoints
     */
    getTopTracks: () => {
        return new Promise((resolve, reject) => {
            if (!this.access_token) reject('no token');
            fetch('https://api.spotify.com/v1/me/top/tracks', {
                method: 'get',
                headers: {
                    Authorization: 'Bearer ' + this.access_token
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) reject(data.error);
                    else resolve(data);
                })
                .catch(err => reject(err));
        });
    },
    getTopArtists: () => {
        return new Promise((resolve, reject) => {
            if (!this.access_token) reject('no token');
            fetch('https://api.spotify.com/v1/me/top/artists', {
                method: 'get',
                headers: {
                    Authorization: 'Bearer ' + this.access_token
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) reject(data.error);
                    else resolve(data);
                })
                .catch(err => reject(err));
        });
    }
};

// This one is courtesy of GitHub
const getHashParams = () => {
    var hashParams = {};
    var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
    }
    return hashParams;
};

// best avoid these
const woah = () => {
    if (window.location.pathname.includes('woah')) return true;
    else return false;
};

// What is this called?
window.woah = woah => window.alert(woah);
