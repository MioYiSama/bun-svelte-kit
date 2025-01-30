FROM oven/bun:distroless

WORKDIR /app
COPY /build .

EXPOSE 3000
CMD ["index.js"]
