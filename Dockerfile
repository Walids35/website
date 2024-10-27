# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Set environment variables
ENV NEXT_PUBLIC_SERVICE_ID=service_f0erggs
ENV NEXT_PUBLIC_TEMPLATE_ID=template_9hq10fj
ENV NEXT_PUBLIC_USER_ID=FICS_Yf1GpAKlfpHA

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on (usually 3000)
EXPOSE 3000

# Command to start the Next.js application
CMD ["npm", "start"]