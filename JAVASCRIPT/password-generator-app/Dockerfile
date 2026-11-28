FROM node:22-alpine

WORKDIR /app
RUN addgroup -S app && adduser -S app -G app

COPY --chown=app:app password-generator.js .

USER app

ENTRYPOINT ["node", "/app/password-generator.js"]
CMD ["14"]
