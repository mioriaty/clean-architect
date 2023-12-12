import { LayerContainer } from '@/containers/LayerContainer/LayerContainer'
import { PreviewContainer } from '@/containers/PreviewContainer/PreviewContainer'
import { css } from '@emotion/react'
import { FC } from 'react'

const styles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
`

const HomePage: FC = () => {
  return (
    <div css={{ maxWidth: '1200px', margin: '0 auto', padding: '10px' }}>
      <div css={styles}>
        <LayerContainer />
        <PreviewContainer />
      </div>
    </div>
  )
}

export default HomePage
