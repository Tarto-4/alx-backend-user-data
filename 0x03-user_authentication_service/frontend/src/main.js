document.getElementById('fetch-news').addEventListener('click', async () => {
    const preferences = document.getElementById('preferences').value;
    const response = await fetch(`/api/news?preferences=${preferences}`);
    const data = await response.json();
    document.getElementById('news-results').innerText = JSON.stringify(data);
});