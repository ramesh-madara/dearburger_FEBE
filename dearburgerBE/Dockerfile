# Dockerfile for CodeIgniter 4 Backend
FROM php:8.1-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libicu-dev

# Install PHP extensions
RUN docker-php-ext-install mysqli pdo pdo_mysql zip intl

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application source
COPY . .

# Install PHP dependencies
RUN composer install

# Set the correct permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html


# Copy Apache virtual host configuration
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80
