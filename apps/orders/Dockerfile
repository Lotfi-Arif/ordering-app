FROM node:16 As development

WORKDIR /usr/src/app

COPY package*.json ./
RUN ls
COPY apps/orders/prisma ./apps/orders

RUN yarn install
WORKDIR /usr/src/app/apps/orders

RUN npx prisma generate 

WORKDIR /usr/src/app

COPY . .

RUN yarn run build

FROM node:16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/prisma ./prisma

CMD ["node", "dist/apps/orders/main"]