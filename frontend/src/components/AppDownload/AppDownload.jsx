import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Deli App</p>
        <div className="app-download-platforms">
        <a href="https://play.google.com/store/apps" target="_blank" rel="noopener">
        <img src={assets.play_store} alt="Get it on Google Play" />
      </a>
        <a href="https://apps.apple.com/app" target="_blank" rel="noopener">
  <img src={assets.app_store} alt="Download on the App Store" />
      </a>
        </div>

    </div>
  )
}

export default AppDownload