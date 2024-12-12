import fs from 'fs';
import md5 from 'md5';
import Koa from 'koa';
import cors from './cors.js';
import multer from '@koa/multer';
import Router from '@koa/router';
import KoaBodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multerUpload = multer({ storage });

router.post(
  '/upload',
  async (ctx, next) => {
    const { md5: MD5, index, name } = ctx.request.body;
    const fileName = `${name}_slice_${index}`;
    const filePath = `./uploads/${fileName}`;

    ctx.fileName = fileName;

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const data = fs.readFileSync(filePath);
      const hash = md5(data);
      if (hash === MD5) {
        ctx.status = 200;
        return;
      }
    }
    return next();
  },
  // multer().single('file'),
  // async (ctx, next) => {
  //   const file = ctx.file;
  //   const { name, index } = ctx.request.body;
  //   const filePath = `./uploads/${name}_slice_${index}`;
  //   if (!file) return (ctx.status = 400);
  // if (
  //   !fs.existsSync('./uploads') ||
  //   !fs.statSync('./uploads').isDirectory()
  // ) {
  //   fs.mkdirSync('./uploads');
  // }

  // const buffer = file.buffer;

  // return await new Promise(resolve => {
  //   fs.writeFile(filePath, buffer, error => {
  //     if (!error) {
  //       ctx.status = 200;
  //       resolve(next());
  //     } else {
  //       ctx.status = 500;
  //       resolve(next());
  //     }
  //   });
  // });
  // },
  multerUpload.single('file')
);

app.use(cors()).use(KoaBodyParser());

app.use(router.routes()).listen(3099, 'localhost', () => {
  console.log(`serve run at http://localhost:${3099}`);
});
