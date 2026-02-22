/**
 * PM2 Ecosystem Configuration
 * Manages the Next.js application process in production
 */

module.exports = {
  apps: [
    {
      name: 'spm-website',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '512M',
      watch: false,
      ignore_watch: ['node_modules', 'logs', '.next'],
      merge_logs: true,
      autorestart: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 4000,
    },
  ],
};

