# pull official base image
FROM  node:alpine3.20

# Set working directory di dalam container
WORKDIR /app

RUN apk add bash curl

# Salin package.json dan yarn.lock ke dalam container
COPY package.json  ./

# Install dependensi menggunakan Yarn
RUN yarn

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN yarn build

# Expose port yang akan digunakan oleh aplikasi (default Next.js: 3000)
EXPOSE 3000

# Jalankan perintah untuk menjalankan aplikasi
CMD ["yarn", "start"]
