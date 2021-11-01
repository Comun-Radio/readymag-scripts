{
  /* <script> */
}

fetch("https://ef64-137-184-63-208.ngrok.io/upcoming")
  .then((res) => {
    console.log("hello from Digital Ocean", res);
    return res.json();
  })
  .then((arr) => {
    const titles = arr.map((item) => item.song.title);
    console.log(titles);
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    const times = arr.map((item) =>
      new Date(item.cued_at * 1000 - tzoffset)
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
    );
    console.log(times);
  })
  .catch((err) => console.log(err));

// </script>
