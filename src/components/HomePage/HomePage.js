import React from 'react'
import Header from '../Header/Header'
import PikoMinisBanner from '../PikoMinisBanner/PikoMinisBanner'
import ColorBlocks from '../ColorBlocks/ColorBlocks'
import PikoStoryPage from '../PikoStoryPage/PikoStoryPage'

const HomePage = () => {
  return (
    <>
      <PikoMinisBanner></PikoMinisBanner>
      <ColorBlocks></ColorBlocks>
      <PikoStoryPage></PikoStoryPage>
      </>
  )
}

export default HomePage