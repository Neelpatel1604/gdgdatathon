import localFont from 'next/font/local';

// Google Sans Font
export const googleSans = localFont({
  variable: '--font-google-sans',
  display: 'swap',
  src: [
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Font/ProductSans-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

// Google Sans Display
export const googleSansDisplay = localFont({
  variable: '--font-google-sans-display',
  display: 'swap',
  src: [
    {
      path: '../../public/assets/Google Sans Display/Google Sans-normal-400-100.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Display/Google Sans Medium-normal-500-100.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Display/Google Sans-normal-700-100.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Display/Google Sans Display Medium-normal-500-100.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/Google Sans Display/Google Sans Display-normal-700-100.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});
