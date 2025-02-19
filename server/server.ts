import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'

const app = new Hono()

app.get(
    "/*",
    serveStatic({
        root:"./dist/",
        rewriteRequestPath: (path) => path.replace(/^\/dist/,"/"),
    })
);

Deno.serve(app.fetch)