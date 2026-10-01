import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const base=new URL(JSON.parse(await readFile('site.json','utf8')).url).pathname;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname==='/'&&base!=='/'){res.writeHead(302,{Location:base});return res.end();}
    if(!pathname.startsWith(base))throw Error();
    let file=resolve(root,pathname.slice(base.length));
    if(file!==root&&!file.startsWith(root+sep))throw Error();
    if((await stat(file)).isDirectory())file=resolve(file,'index.html');
    const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(body);
  }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html')));}
}).listen(Number(process.env.PORT)||4321,'127.0.0.1',()=>console.log(`http://127.0.0.1:${Number(process.env.PORT)||4321}${base}`));
