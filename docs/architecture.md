# System architecture

This document provides an overview of the system architecture for the Aleia Chatbot project. It outlines the key components, their interactions, and the overall design principles guiding the development of the application.

## Overview

### Admin Dashboard

The Admin dashboard is designed for the provider company to manage clients, configure the chatbot, and monitor interactions. Key features include:

- Client registration and management
- Custom chatbot configuration per client
- Integration with WhatsApp for messaging
- View system-wide analytics and logs

### User Dashboard

- Dashboard for clients (e.g., chatbot use, scheduling state, etc.)
- Chat interface for client history conversation and manual messaging
- Appointment calendar view for managing schedules
- Client-specific settings for the account

## Main components

- **Frontend**: The user interface for both the Admin and User dashboards
- **Backend**: The server-side logic handling requests, managing data, authentication, connections to external services, and business logic
- **Database**: The persistent storage for user data, chatbot configurations, and interaction logs
- **n8n**: The workflow automation for integrating with backend
- **WhatsApp API**: The messaging service for client interactions
- **OpenAI API**: The AI service for generating responses in the chatbot
- **Docker**: The containerization platform for deploying the application components

## Authentication and Authorization

- JWT for secure user authentication
- Firebase for user management and authentication
- Role-based access control to differentiate between Admin and User functionalities
- OAuth for third-party integrations (e.g., WhatsApp)
- Secure storage of sensitive data (e.g., API keys, user credentials)
- Environment variables for configuration management
