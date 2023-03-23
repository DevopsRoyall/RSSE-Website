# Build Next.js frontend
FROM node:14-alpine AS frontend-builder
WORKDIR /app
COPY ./rsse-frontend/package.json ./rsse-frontend/package-lock.json ./
RUN npm ci
COPY ./rsse-frontend .
RUN npm run build

# Build Strapi backend
FROM node:14-alpine AS backend-builder
WORKDIR /app
COPY ./rsse-strapi/package.json ./rsse-strapi/package-lock.json ./
RUN npm ci
COPY ./rsse-strapi .
RUN npm run build

# nginx configuration
FROM nginx:stable-alpine as nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Final image
FROM node:14-alpine
WORKDIR /app
RUN apk add --no-cache --virtual .build-deps ca-certificates

# Copy frontend build
COPY --from=frontend-builder /app/.next /app/rsse-frontend/.next
COPY --from=frontend-builder /app/node_modules /app/rsse-frontend/node_modules

# Copy backend build
COPY --from=backend-builder /app/build /app/rsse-strapi/build
COPY --from=backend-builder /app/node_modules /app/rsse-strapi/node_modules

# Copy nginx configuration
COPY --from=nginx /etc/nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Run the application
CMD ["sh", "-c", "cd rsse-frontend && npm start & cd rsse-strapi && npm start & nginx"]
