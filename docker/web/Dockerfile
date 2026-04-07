FROM node:24.14.1-slim
RUN apt-get update && apt-get install -y curl ca-certificates --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN curl -fsSL https://vite.plus | bash && \
    ln -s $(find /root/.vite-plus -name "vp" -path "*/bin/vp" | head -1) /usr/local/bin/vp
WORKDIR /app
