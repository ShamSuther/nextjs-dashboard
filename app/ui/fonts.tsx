import { Inter, Roboto, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: false,
});
const dm_sans = DM_Sans({ subsets: ['latin'], display: 'swap' });

export { inter, roboto, dm_sans };
