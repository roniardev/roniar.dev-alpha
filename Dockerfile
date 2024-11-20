# pull official base image
FROM node:20.3.0-alpine

ARG branch
ENV env $branch

# Set working directory di dalam container
WORKDIR /app

RUN apk add bash curl

# Salin package.json dan yarn.lock ke dalam container
COPY package.json  ./

# Install dependensi menggunakan Yarn
RUN npm install -g yarn
RUN yarn install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN yarn build

# Expose port yang akan digunakan oleh aplikasi (default Next.js: 3000)
EXPOSE 3000

# Jalankan perintah untuk menjalankan aplikasi
CMD ["yarn", "start"]
