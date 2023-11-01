module.exports = {
  apps: [
    {
      name: "rifas",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
