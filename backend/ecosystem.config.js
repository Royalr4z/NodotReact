module.exports = {
    apps: [
      {
        name: 'app',
        script: 'node_modules/ts-node/dist/bin.js', // Caminho para o ts-node
        args: 'index.ts', // Arquivo principal
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '500M',
        env: {
          PORT: 4000,
          NODE_ENV: 'producao',
        },
      },
    ],
  };
  