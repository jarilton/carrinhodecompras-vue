# estágio de compilação
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]

# estágio de produção
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]