FROM node:18-alpine

ARG PUBLIC_URL ${PUBLIC_URL}

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV development

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]