/** @type {import('next').NextConfig} */
const NextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'cdn.pandascore.co',
            port: '',
            pathname: '/**',
        },
        ],
    },
};

module.exports = NextConfig;