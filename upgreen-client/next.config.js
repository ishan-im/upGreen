/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"]
  },
  env: {
      API_KEY: 'AIzaSyAtREIZ2EcxRR2N7JMlvrhkkExNC8yHqCs',
      AUTH_DOMAIN: 'up-green-40f76.firebaseapp.com',
      PROJECT_ID: 'up-green-40f76',
      STORAGE_BUCKET: 'up-green-40f76.appspot.com',
      MESSAGING_SENDER_ID: '1074881011401',
      APP_ID: '1:1074881011401:web:0a5fa653dbb7eca1473718',
      MEASUREMENT_ID: 'G-37ME4KZP5B'
  }
}

module.exports = nextConfig
