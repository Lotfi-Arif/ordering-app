FROM node:16 As development

WORKDIR /usr/src/app

COPY package.json ./
COPY package*.json ./
COPY apps/orders/prisma ./apps/orders/

# COPY ENV variable
COPY apps/orders/.env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Install dependancies
RUN yarn install

COPY . .

RUN yarn run generate:orders

RUN yarn run build

# FROM node:16 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN yarn install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist
# COPY --from=development /usr/src/app/prisma ./prisma

CMD [ "yarn" , "start:dev", "server" ]
