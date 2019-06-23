export const sizePX = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};

export const sizeREM = {
  mobileS: 22.857,
  mobileM: 26.786,
  mobileL: 30.357,
  tablet: 54.857,
  laptop: 73.143,
  laptopL: 102.857,
  desktop: 182.857
};

export const media = {
  mobileS: `(min-width: ${size.mobileS}rem)`,
  mobileM: `(min-width: ${size.mobileM}rem)`,
  mobileL: `(min-width: ${size.mobileL}rem)`,
  tablet: `(min-width: ${size.tablet}rem)`,
  laptop: `(min-width: ${size.laptop}rem)`,
  laptopL: `(min-width: ${size.laptopL}rem)`,
  desktop: `(min-width: ${size.desktop}rem)`,
  desktopL: `(min-width: ${size.desktop}rem)`
};
