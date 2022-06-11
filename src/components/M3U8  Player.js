import React, { useState } from 'react';
import {
  Player,
  DefaultUi,
  Settings,
  MenuItem,
  Submenu,
  MenuRadio,
  MenuRadioGroup,
  Video,
  Dash,
  Hls
} from '@vime/react';

export function M3U8Player() {
  const [value, setValue] = useState('1');

  const onMenuItem1Click = () => {
    console.log('Clicked menu item 1');
  };

  const onMenuItem2Click = () => {
    console.log('Clicked menu item 2');
  };

  const onCheck = (event) => {
    const radio = event.target;
    setValue(radio.value);
  };

  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css"
/>
  return (
      
    <Player controls>
        <Hls version="latest" poster="/media/poster.png">
        <source data-src="https://32991986c342.us-east-1.playback.live-video.net/api/video/v1/us-east-1.906965699706.channel.CCNgBpS40zMf.m3u8" type="application/x-mpegURL" />
      </Hls>
      <DefaultUi />
    </Player>
  );
}

export default M3U8Player