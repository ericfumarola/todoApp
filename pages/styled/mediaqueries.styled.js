// import { mediaQuery } from 'styled-components' // assuming this feature is added!
//
// const sizes = {
//   xl : 1200,
//   lg : 1199,
// 	md: 991,
// 	sm: 767,
// 	xs: 575
// }
//
// export const media = {
//   handheld:   mediaQuery`(max-width: ${(sizes.tablet - 1) / 16}em)`,
//   tablet:     mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
//   tabletOnly: mediaQuery`(min-width: ${sizes.tablet / 16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
//   desktop:    mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
//   giant:      mediaQuery`(min-width: ${sizes.giant / 16}em)`,
//   minWidth:   (pxValue) => mediaQuery`(min-width: ${pxValue / 16}em)`,
//   print:      mediaQuery`print`,
// }


// $easeOutCubic = cubic-bezier(0.18, 0.89, 0.32, 1.28);
// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  xl : 1200,
  lg : 1199,
	md: 991,
	sm: 767,
	xs: 575
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
