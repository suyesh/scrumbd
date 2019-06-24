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
  mobileS: `(min-width: ${sizeREM.mobileS}rem)`,
  mobileM: `(min-width: ${sizeREM.mobileM}rem)`,
  mobileL: `(min-width: ${sizeREM.mobileL}rem)`,
  tablet: `(min-width: ${sizeREM.tablet}rem)`,
  laptop: `(min-width: ${sizeREM.laptop}rem)`,
  laptopL: `(min-width: ${sizeREM.laptopL}rem)`,
  desktop: `(min-width: ${sizeREM.desktop}rem)`,
  desktopL: `(min-width: ${sizeREM.desktop}rem)`
};
