{
  /* <script> */
}

// artistas text box dataid - 617f4d760b735e0020d90504

// make periodic fetches - every 5 min ?
//  6:05, 6:10, 6:15 if it starts anytime between 6:00 and 6:04:59

fetch("https://2586-137-184-63-208.ngrok.io/upcoming")
  .then((res) => {
    return res.json();
  })
  .then((arr) => {
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    const queue = arr.map((item) => ({
      title: item.song.title,
      time: new Date(item.cued_at * 1000 - tzoffset)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    }));
    queue.unshift({
      title: "Artistas",
      time: "a Horas",
    });

    let calendarHTML = "";
    for (let i = 0; i < 5; i++) {
      calendarHTML += `
        <div class="flex">
          <h2 class="flex-child title">${queue[i].title.toUpperCase()}<\h2>
          <h2 class="flex-child time">${queue[i].time.split(" ")[1]}<\h2>
  		  </div>`;
    }
    const container = document.querySelector(
      'div[data-id="617f4d760b735e0020d90504"] p'
    );
    container.innerHTML = calendarHTML;
  })
  .catch((err) => console.log(err));

// </script>
