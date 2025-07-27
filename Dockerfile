# Gunakan image resmi Node.js
FROM node:18

# Buat direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin file package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Salin semua file project ke dalam image
COPY . .

# Ekspos port sesuai aplikasi (misal 3000)
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "app.js"]
