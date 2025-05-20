FROM mcr.microsoft.com/devcontainers/javascript-node

RUN apt-get update
RUN apt-get upgrade -y
# RUN apt-get install -y build-essential
# RUN apt-get install -y iputils-ping
# RUN apt-get install -y nodejs
# RUN apt-get install -y npm
# RUN apt-get install -y mariadb-client

# Install nvm
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# nvm install node
# nvm use node
# nvm alias default node

# INSTALL npm USING nvm
# nvm install-latest-npm

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

EXPOSE 5173

USER node