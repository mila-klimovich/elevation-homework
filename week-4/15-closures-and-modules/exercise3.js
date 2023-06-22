const SongsManager = function () {
    const _songs = {};
    const urlStart = "https://www.youtube.com/watch?v=";

    const urlEnd = url => url.split("").splice(32).join("");
    const fullUrl = identifier => urlStart + identifier;

    const addSong = (name, url) => _songs[name] = urlEnd(url);

    const getSong = name => console.log(fullUrl(_songs[name]));

    return {
        addSong: addSong,
        getSong: getSong
    }
}



const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
