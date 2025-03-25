# Shop API Documentation

This document provides an overview of the Shop API, which is built using the following technologies: Nest.js, Kafka, PostgreSQL, Prisma, Elasticsearch, Swagger, Docker, and Redis.

## Table of Contents

- [Introduction](#introduction)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Data Models](#data-models)
- [Database](#database)
- [Search](#search)
- [Messaging](#messaging)
- [API Documentation](#api-documentation)
- [Containerization](#containerization)
- [Caching](#caching)

## Introduction

The Shop API is a RESTful API designed to handle various operations related to an e-commerce shop. It provides endpoints for managing products, orders, customers, and more.

## Endpoints

The following table lists the available endpoints of the Shop API:

| Endpoint                     | Description                                     |
| ---------------------------- | ----------------------------------------------- |
| `/api/products`              | CRUD operations for managing products           |
| `/api/categories`            | CRUD operations for managing categories         |
| `/api/customers`             | CRUD operations for managing customers          |
| `/api/register`              | User registration endpoint                      |
| `/api/login`                 | User login endpoint                             |
| `/api/logout`                | User logout endpoint                            |
| `/api/health`                | Health check endpoint                           |
| `/api/search`                | Elastic endpoint                                |
| `/api`                       | Swagger docs endpoint                           |
| `/payment`                   | Payment endpoint                                |

## Authentication

The Shop API uses JWT (JSON Web Tokens) for authentication. The following endpoints require authentication:

- `/api/cart` (create, update, delete operations)
- `/api/health` (check db availability)
- `/payment` (create payment using stripe)

To perform authenticated requests, include the JWT token in the `Authorization` header as follows: `Authorization: Bearer <token>`

## Data Models

The Shop API uses the following data models:

### Product

- `id` (number)
- `title` (string)
- `price` (string)
- `description` (string)
- `categories` ([categories])
- `image` (string)

### Category

- `id` (number)
- `categoryName` (string)

### Cart

- `id` (uuid)
- `userId` (string)
- `date` (DateTime)

### User

- `id` (uuid)
- `email` (string)
- `password` (string)
- `hashedRt` (string)
- `role` (Role)
- `address` (address)

### Address

- `id` (uuid)
- `userId` (string)
- `address_line1` (string)
- `address_line2` (string)
- `city` (string)
- `region` (string)
- `postal_code` (string)
- `country` (string)

### Role
- `USER`
- `SELLER`
- `ADMIN`

## Database

The Shop API uses PostgreSQL as the underlying database. Prisma is used as the ORM (Object-Relational Mapping) tool to interact with the database. Prisma provides a type-safe API for querying and manipulating data.

## Search

Elasticsearch is used for implementing search functionality in the Shop API. It enables fast and efficient full-text search capabilities for products.

## Messaging

RabbitMQ is used as a message broker for handling asynchronous events and communication between different components of the Shop API. It provides reliable and scalable messaging.

## API Documentation

The Shop API is documented using Swagger. Swagger provides a user-friendly interface to explore and test the API endpoints. You can access the API documentation by visiting the `/api` endpoint.

## Containerization

The Shop API is containerized using Docker compose. Docker allows for easy deployment and scalability of the application by packaging it into lightweight, portable containers.

## Caching

Redis is used as a caching layer in the Shop API. It helps improve the performance of frequently accessed data by storing it in memory.

---
