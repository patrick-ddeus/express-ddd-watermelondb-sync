import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';

export default function (app: Express) {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(morgan('common'));
}
