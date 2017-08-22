import { mediaQuery } from 'styled-components' // assuming this feature is added!

const sizes = {
  xl : 1200,
  lg : 1199,
	md: 991,
	sm: 767,
	xs: 575
}

export const media = {
  handheld:   mediaQuery`(max-width: ${(sizes.tablet - 1) / 16}em)`,
  tablet:     mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
  tabletOnly: mediaQuery`(min-width: ${sizes.tablet / 16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
  desktop:    mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
  giant:      mediaQuery`(min-width: ${sizes.giant / 16}em)`,
  minWidth:   (pxValue) => mediaQuery`(min-width: ${pxValue / 16}em)`,
  print:      mediaQuery`print`,
}
