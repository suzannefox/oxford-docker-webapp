# Use an existing base image
FROM nginx

# Copy the HTML and JavaScript files to the nginx public directory
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 80 for HTTP traffic
EXPOSE 80
