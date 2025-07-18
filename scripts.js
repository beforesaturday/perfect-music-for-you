const songs = [
  {
    title: "Ethereal Light",
    link: "https://www.youtube.com/watch?v=example",
    type: "Instrumental",
    artist: "Aether",
    contact: "@aethermusic"
  }
];

window.onload = () => {
  const container = document.getElementById("musicList");
  if (!container) return;

  songs.forEach(song => {
    const block = document.createElement("div");
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
    block.style.border = "1px solid #1abc9c";
    block.style.margin = "1rem 0";
    block.style.padding = "1rem";
    block.style.borderRadius = "10px";
    container.appendChild(block);
  });
};