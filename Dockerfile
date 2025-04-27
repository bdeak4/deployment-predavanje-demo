FROM node:20
WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./apps/api/package.json ./apps/api/package.json
COPY ./apps/api/package-lock.json ./apps/api/package-lock.json
COPY ./apps/web/package.json ./apps/web/package.json
COPY ./apps/web/package-lock.json ./apps/web/package-lock.json
COPY ./apps/api/prisma ./apps/api/prisma

RUN npm install

COPY . .

RUN npm run build

CMD node apps/api/dist/src/main.js