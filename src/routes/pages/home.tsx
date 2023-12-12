import { LayerContainer } from '@/containers/LayerContainer/LayerContainer'
import { PreviewContainer } from '@/containers/PreviewContainer/PreviewContainer'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <div css={{ maxWidth: '1200px', margin: '0 auto', padding: '10px' }}>
      <div css={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <LayerContainer />
        <PreviewContainer />
      </div>
    </div>
  )
}

export default HomePage
