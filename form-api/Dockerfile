# Use official PHP image with Apache
FROM php:8.2-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install any additional PHP extensions if needed
RUN docker-php-ext-install pdo pdo_mysql

# Copy application files
COPY api/ /var/www/html/

# Set working directory
WORKDIR /var/www/html

# Configure Apache to listen on the PORT environment variable
RUN sed -i 's/80/${PORT}/g' /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf

# Expose the port
EXPOSE ${PORT}

# Start Apache
CMD ["apache2-foreground"]
