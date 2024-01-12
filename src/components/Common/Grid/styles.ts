import styled from '@emotion/styled'
import { media } from 'utils/media'

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  margin: 0 auto;
  ${media[0]} {
    max-width: 1020px;
    padding: 0 30px;
  }

  ${media[1]} {
    max-width: 1140px;
    padding: 0;
  }
`
