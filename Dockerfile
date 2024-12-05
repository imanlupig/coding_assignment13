# Base image using Node.js
FROM node:22-alpine

# Set the working directory
WORKDIR /imanlupig_ui_garden_build_checks

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app for production
RUN npm run build

# Set environment variable for the port
ENV PORT=8083

# Expose port 8083 for the app
EXPOSE 8083

# Start the app using a static file server
CMD ["serve", "-s", "build", "-l", "8083"]
