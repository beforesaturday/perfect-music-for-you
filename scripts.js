let songs = JSON.parse(localStorage.getItem("songs") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  const artistForm = document.getElementById("artistForm");
  const musicList = document.getElementById("musicList");

  if (artistForm) {
    artistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const artistName = document.getElementById("artistName").value;
      const contactInfo = document.getElementById("contactInfo").value;
      const title = document.getElementById("title").value;
      const link = document.getElementById("link").value;
      const type = document.getElementById("type").value;

      const newSong = {
        title,
        type,
        artist: artistName,
        contact: contactInfo,
        link: link || "Audio file (local upload)",
      };

      songs.push(newSong);
      localStorage.setItem("songs", JSON.stringify(songs));

      document.getElementById("confirmation").innerText = "Your song has been registered!";
      artistForm.reset();
    });
  }

  if (musicList) {
    songs.forEach((song) => {
      const block = document.createElement("div");
      block.className = "song-block";
      block.innerHTML = `
        <h2>${song.title}</h2>
        <p>Type: ${song.type}</p>
        <p>By: ${song.artist} | Contact: ${song.contact}</p>
        <a href="${song.link}" target="_blank">Listen</a><br><br>
        <form>
          <input type="text" placeholder="Your Name"><br>
          <input type="text" placeholder="Contact (optional)"><br>
          <input type="text" placeholder="What moment impacted you? (mm:ss)"><br>
          <input type="text" placeholder="Emotion or reaction"><br>
          <label><input type="checkbox"> This is a perfect song for me</label><br>
          <button type="submit">Submit Feedback</button>
        </form>
      `;
      musicList.appendChild(block);
    });
  }
});
