# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (including dev for build, prune later if needed)
RUN npm install

# Copy the rest of the application code (node_modules is excluded by .dockerignore)
COPY . .

# Expose the port (adjust if your app uses a different port)
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
