#!/bin/sh

cd rsse-frontend
npm start &

cd ../rsse-strapi
npm start &

nginx -g 'daemon off;'
