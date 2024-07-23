# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /app

# Install Vite globally
RUN npm install -g create-vite
RUN npm install -g npm-check-updates

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all local files to the container
COPY . .

# Build your Vite project
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app using CMD which starts your Vite app
CMD ["npm", "run", "dev"]