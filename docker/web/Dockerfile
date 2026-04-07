FROM node:24.14.1-slim
RUN apt-get update && apt-get install -y curl --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN curl -fsSL https://vite.plus | bash
ENV PATH="/root/.local/bin:${PATH}"
WORKDIR /app
