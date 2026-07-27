module.exports = {
  apps: [{
    name: 'autofixer-web',
    cwd: '/var/www/autofixer-web',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
