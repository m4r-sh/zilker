import { networkInterfaces as getNetworkInteraces } from 'node:os'

const networkInterfaces = getNetworkInteraces()

const headersMap = {
  html: { 'Content-Type': 'text/html; charset=utf-8' },
  js: { 'Content-Type': 'application/javascript' },
  css: { 'Content-Type': 'text/css' },
  xml: { 'Content-Type': 'application/xml' },
  svg: { 'Content-Type': 'image/svg+xml' },
  gif: { 'Content-Type': 'image/gif' },
  png: { 'Content-Type': 'image/png' },
  jpeg: { 'Content-Type': 'image/jpeg' },
  jpg: { 'Content-Type': 'image/jpeg' },
  ico: { 'Content-Type': 'image/x-icon' },
  json: { 'Content-Type': 'application/json' },
  txt: { 'Content-Type': 'text/plain; charset=utf-8' },
  pdf: { 'Content-Type': 'application/pdf' },
  wasm: { 'Content-Type': 'application/wasm' },
  webp: { 'Content-Type': 'image/webp' },
  mp4: { 'Content-Type': 'video/mp4' },
  webm: { 'Content-Type': 'video/webm' },
  mp3: { 'Content-Type': 'audio/mpeg' },
  ogg: { 'Content-Type': 'audio/ogg' },
  wav: { 'Content-Type': 'audio/wav' },
  ttf: { 'Content-Type': 'font/ttf' },
  woff: { 'Content-Type': 'font/woff' },
  woff2: { 'Content-Type': 'font/woff2' },
  avif: { 'Content-Type': 'image/avif' },
  zip: { 'Content-Type': 'application/zip' },
  tar: { 'Content-Type': 'application/x-tar' },
  gz: { 'Content-Type': 'application/gzip' },
  csv: { 'Content-Type': 'text/csv' },
  md: { 'Content-Type': 'text/markdown; charset=utf-8' },
};

export function getHeaders(p){
  const ext = p.split('.').pop().toLowerCase();
  return headersMap[ext] || { 'Content-Type': 'application/octet-stream' };
};

export function getNetworkAddress(){
  for(const interfaceDetails of Object.values(networkInterfaces)){
    if(!interfaceDetails) continue;

    for(const details of interfaceDetails){
      const { address, family, internal } = details

      if(family == 'IPv4' && !internal) return address
    }
  }
}