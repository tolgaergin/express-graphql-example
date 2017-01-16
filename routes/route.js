import express from 'express';
const router = express.Router();
import db from '../db';

import { graphql } from 'graphql';
import Schema from '../graphql/index';

// https://github.com/RisingStack/graphql-server/blob/master/src/server/server.js
// https://github.com/tjmehta/graphql-fetch
// https://github.com/kadirahq/lokka

router
  .get('/', (req, res, next) => {
    db('posts').then((posts) => {
      res.send(posts);
    }, next);
  })
  .get('/postgraph/:post_id', (req, res, next) => {
    const query = `
      query {
        post (id: ${req.params.post_id}) {
          title,
          description
        }
      }
    `;
    graphql(Schema, query).then(
      post => {
        res.send(post);
      }
    );
  })
  .get('/post/:post_id', (req, res, next) => {
    db('posts')
    .where('id', req.params.post_id)
    .first()
    .then((post) => {
      res.send(post);
    }, next);
  })
  .get('/comments', (req, res, next) => {
    db('comments').then((comments) => {
      res.send(comments);
    }, next);
  })
  .get('/comment/:post_id', (req, res, next) => {
    db('comments')
    .where('post_id', req.params.post_id)
    .then((comment) => {
      res.send(comment);
    }, next);
  });

export default router;
