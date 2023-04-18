import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const fonts = { monte: 'Montserrat' }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})


const theme = extendTheme({
  components:{
    Image
  },
  colors: {
    black: '#16161D',
    button: '#00ADB5',
    gree: "#edf2f7"
  },
  fonts,
  breakpoints,
})

export default theme