#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
bash -i -c 'export NVM_DIR="$HOME/.nvm"'
bash -i -c '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'  # This loads nvm
bash -i -c '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"'  # This loads nvm bash_completion
bash -i -c 'nvm install --lts'
bash -i -c 'nvm use node'
bash -i -c 'nvm install-latest-npm'
# bash -i -c 'npm install azure-functions-core-tools@4 --savedev'
# bash -i -c 'npm init es6 -y'
# bash -i -c 'mkdir ./src ./src/workorders ./src/workorders/models ./src/workorders/views ./src/workorders/controllers ./src/workorders/routes'
# bash -i -c 'npm install "express@5" --save'
# bash -i -c 'npm install express-session --save'
# bash -i -c 'npm install mongoose --save'
# bash -i -c 'npm install nodemon' --save
# bash -i -c 'npm install dotenv --save'
# bash -i -c 'npm install axios --save'
# bash -i -c 'npm install redis --save'
# cd ./src
# bash -i -c 'npm install'