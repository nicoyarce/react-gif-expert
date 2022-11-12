export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FKrlB71r91d1I5RqZ7sXqSbB0zZpBOhu&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    return gifs;
};
