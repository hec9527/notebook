const cors = option => {
  return async (ctx, next) => {
    ctx.set(
      'Access-Control-Allow-Origin',
      option?.allowOrigin || ctx.header.origin || '*'
    );
    ctx.set(
      'Access-Control-Allow-Headers',
      option?.allowHeaders ||
        'Content-Type,X-Requested-With,X-Requested-With,Accept,authorization,APPID'
    );
    ctx.set(
      'Access-Control-Allow-Methods',
      option?.allowMethods || 'GET,POST,OPTIONS'
    );
    ctx.set(
      'Access-Control-Allow-Credentials',
      option?.allowCredentials || 'true'
    );

    if (ctx.req.method?.toUpperCase() === 'OPTIONS') {
      ctx.status = 200;
      return;
    } else {
      await next();
    }
  };
};

export default cors;
