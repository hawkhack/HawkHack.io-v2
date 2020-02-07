module.exports = {
  apps: [
    {
      name: "hawkhack",
      script: "../server.js",
      env_production: {
        NODE_ENV: "production"
      },
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
