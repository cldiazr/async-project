const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC9k0tTsh_qStx0HPuPftSsg&part=snippet%2Cid&order=date&maxResults=2';
const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '31716800f0mshf7aeddfc044fba8p132445jsna4f03c59203d',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
	    const response = await fetch(urlApi, options);
	    const result = await response.json();
	    return result
}

(async ()=> {
    try{
        const videos = await fetchData(url)
        let view = `
        ${videos.items.map(video=> `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>
            `).slice(0,4).join('')}

        `
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})()