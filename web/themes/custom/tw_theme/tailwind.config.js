const {screens,fontSize,listStyleType,boxShadow,maxHeight,minHeight,transitionProperty,transitionDuration,transitionTimingFunction} = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: false,
  theme: {
    screens: {
      // Default breakpoints.
      // @see https://tailwindcss.com/docs/breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Custom breakpoints.
      '3xl': '1792px',
      'print': {'raw': 'print'},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      black: 'black',
      gray: colors.gray,
      branding:{
        athens: '#d4dcdd',
        teal: '#115e67',
        orange: '#f4633a',
        "outer-space": '#373a3a',
        status: '#34d399',
        'status-dark': '#065f46',
        'status-light': '#ecfdf5',
        warning:'#fbbf24',
        'warning-dark': '#b45309',
        'warning-light': '#fffbeb',
        error:'#f87171',
        'error-dark': '#b91c1c',
        'error-light': '#fef2f2',
      }
    },
    fontSize: {
      ...fontSize,
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    listStyleType: {
      ...listStyleType,
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    boxShadow: {
      ...boxShadow,
      menu: '0 3px 3px 0 rgba(0,0,0,0),0 3px 1px 0 rgba(0,0,0,0.05)',
    },
    maxHeight: {
      ...maxHeight,
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80%',
      'full': '100%',
    },
    minHeight: {
      ...minHeight,
      '1/4screen': '25vh',
      '1/3screen': '33.33vh',
      '1/2screen': '50vh',
      '2/3screen': '66.67vh',
      '3/4screen': '75vh',
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.none'),
        },
      },
    }),
    extend: {
      backgroundImage: theme => ({
        'messages-status': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%234ade80'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E\")",
        'messages-warning': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23facc15'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01' /%3E%3C/svg%3E\")",
        'messages-error': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23f87185'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E\")",
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
