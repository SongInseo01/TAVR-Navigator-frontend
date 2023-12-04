FROM gachonccl/tavr-nv-is-frontend-base:0.1

COPY ./.. /app/tavr-navigator-frontend

WORKDIR /app/tavr-navigator-frontend

CMD ["npm", "run", "start"]