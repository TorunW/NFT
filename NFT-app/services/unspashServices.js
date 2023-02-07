import Unsplash, { toJson } from 'unsplash-js/native';
import config from '../config/index.js'
const unsplash = new Unsplash({
  applicationId: config.unsplash.accessKey,
  secret: config.unsplash.secretKey,
});

export default {
  listPhotos: unsplash.photos.listPhotos,
  toJson,
};