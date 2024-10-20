import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const GET = async () => {
  return new ImageResponse(<div>Hello</div>);
};
