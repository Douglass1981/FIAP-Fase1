import { NextRequest } from 'next/server';
 
export function GET() {
  

 
  return new Response(
    JSON.stringify({ result: `hello world` }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}