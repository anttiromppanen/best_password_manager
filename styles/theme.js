const palette = {
  primary: '#2E45A8',
  primaryLight: '#7C7AAE',
  primaryDark: '#001D75',
  secondary: '#118584',
  secondaryVariant: '#',

  white: '#FFFFFF',
  darkerWhite: '#',
  black: '#000',
  grey: 'grey',
  lightGrey: '#EEEFF6',
  darkerGrey: '#8F8CB8',

  success: '#24C196',
  danger: '',
  warning: '#FF826A',
  failure: '#ED5489',

  background: '#F7F8FF',
  backgoundDark: '#292a33',
}

const componentHeight = {
  sm: 10,
  md: 20,
  lg: 40,
}

const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
}

const baseStyles = {
  textInput: {
    borderRadius: 50,
  },
  button: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: palette.background,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
}

export const theme = {
  colors: { ...palette },
  spacing: { ...spacing },
  heights: { ...componentHeight },
  container: baseStyles.container,
  textVariants: {
    h1: {
      fontSize: 28,
    },
    h2: {
      fontSize: 28,
    },
  },
  inputVariants: {
    lg: {
      ...baseStyles.textInput,
      width: '100%',
      height: componentHeight.lg,
      paddingLeft: 16,
      backgroundColor: palette.white,
      fontSize: 16,
    },
  },
  buttonVariants: {
    base: baseStyles.button,
    containedLg: {
      ...baseStyles.button,
      height: componentHeight.lg,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.sm,
      backgroundColor: palette.primary,
    },
    textLg: {
      ...baseStyles.button,
      height: componentHeight.lg,
      padding: spacing.sm,
    },
  },
}