/** @type {import('next').NextConfig} */

import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {

    async rewrites() {
        return [
          {
            source: '/api/:path*', // Coincide con todas las rutas que comienzan con /api
            destination: 'http://digitalmoney.ctd.academy/api/:path*', // Redirige a la API
          },
        ];
      },


};

export default nextConfig;
