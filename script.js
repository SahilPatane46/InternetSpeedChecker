function checkSpeed() {
  const image = new Image();
  const imageSizeInBytes = 500000; // approx. 500 KB
  const startTime = new Date().getTime();

  image.onload = function () {
    const endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000; // in seconds
    const bitsLoaded = imageSizeInBytes * 8;
    const speedMbps = (bitsLoaded / duration / 1024 / 1024).toFixed(2);
    document.getElementById('speed').textContent = `${speedMbps} Mbps`;
  };

  // Add a random query to avoid caching
  image.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg?" + Math.random();
}