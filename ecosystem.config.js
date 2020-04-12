module.exports = {
  apps : [{
    name: 'index',
    script: 'app/index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '74.208.169.91',
      ref  : 'origin/develop',
      repo : 'git@github.com:PedroDBahena/daily-backend.git',
      path : '/var/www/',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
