// Fetch data from XKCD API
fetch('https://xkcd.com/info.0.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Extract relevant data and update UI
        const comicTitle = data.title;
        const comicImgUrl = data.img;
        const comicAlt = data.alt;

        const xkcdComicContainer = document.getElementById('xkcd-comic-container');
        xkcdComicContainer.innerHTML = `
            <h3>${comicTitle}</h3>
            <img src="${comicImgUrl}" alt="${comicAlt}">
            <p>${comicAlt}</p>
            <p><a href="https://xkcd.com/${data.num}">View on XKCD</a></p>
        `;
    })
    .catch(error => {
        console.error('Error fetching XKCD comic:', error);
        const xkcdComicContainer = document.getElementById('xkcd-comic-container');
        xkcdComicContainer.innerHTML = '<p>Failed to fetch XKCD comic. Please check your network connection and try again.</p>';
    });
