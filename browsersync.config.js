const browserSync = require("browser-sync").create();

browserSync.init({
  proxy: "http://localhost:3001", // Proxy your Go server
  files: ["./templates/**/*.html", "./static/css/**/*.css"],
  reloadDelay: 100,
});
