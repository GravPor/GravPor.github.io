const user = "daifukudo";
const apiKey = "12add71e885b32312fe5957f983f71e4";
const INTERVAL = 5 * 60 * 1000; // 5分

const root   = document.getElementById("now-playing");
const art    = document.getElementById("np-art");
const title  = document.getElementById("np-title");
const artist = document.getElementById("np-artist");

function updateNowPlaying() {
  fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`)
    .then(res => res.json())
    .then(data => {
      const track = data.recenttracks.track[0];
      const now = track['@attr']?.nowplaying;

      if (!now) {
        root.style.display = "none";
        return;
      }

      root.style.display = "flex";
      title.textContent  = track.name;
      artist.textContent = track.artist['#text'];

      const images = track.image;
      const img = images.find(i => i.size === "medium") || images[0];

      if (img && img['#text']) {
        art.src = img['#text'];
        art.style.display = "block";
      } else {
        art.style.display = "none";
      }
    })
    .catch(() => {
      root.style.display = "none";
    });
}

// 初回
updateNowPlaying();

// 5分ごとに更新
setInterval(updateNowPlaying, INTERVAL);
