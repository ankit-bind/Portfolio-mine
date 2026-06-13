// Vercel Node.js adapter for TanStack Start SSR
// Converts the Web fetch API to Node.js req/res

import { Readable } from "stream";

const serverPromise = import("./dist/server/server.js").then((m) => m.default);

export default async (req, res) => {
  const server = await serverPromise;

  const url = new URL(req.url, `http://${req.headers.host}`);
  const request = new Request(url, {
    method: req.method,
    headers: new Headers(req.headers),
    body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (response.body) {
    const reader = response.body.getReader();
    const stream = new Readable({
      async read() {
        const { done, value } = await reader.read();
        if (done) {
          this.push(null);
        } else {
          this.push(value);
        }
      },
    });
    stream.pipe(res);
  } else {
    res.end();
  }
};
