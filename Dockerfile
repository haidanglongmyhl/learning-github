# Sử dụng Node.js 18 làm base image
FROM node:18-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install --legacy-peer-deps

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Biên dịch mã nguồn TypeScript (nếu dùng)
RUN npm run build

# Chạy ứng dụng NestJS
CMD ["npm", "run", "start"]

# Expose cổng mặc định của NestJS (nếu có)
EXPOSE 3000
