# Use the official Node.js 18 Alpine as base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies separately
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose port 3000
EXPOSE 3000

# Run Next.js in development mode
CMD ["npm", "run", "dev"]
