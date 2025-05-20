FROM mcr.microsoft.com/devcontainers/base:jammy

RUN apt-get update
RUN apt-get upgrade -y
# RUN apt-get install -y build-essential
# RUN apt-get install -y iputils-ping
# RUN apt-get install -y nodejs
# RUN apt-get install -y npm
# RUN apt-get install -y mariadb-client

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

# Expose port 5173 for Vite. Vite uses port 5173 by default for development
EXPOSE 5173

USER vscode