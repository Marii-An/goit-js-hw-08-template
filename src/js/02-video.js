import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CONTINUE_PLAY = 'videoplayer-current-time';

const storedTime = Number(localStorage.getItem(CONTINUE_PLAY)) || 0;

player.setCurrentTime(storedTime);
const updateTime = data => {
  localStorage.setItem(CONTINUE_PLAY, data.seconds);
};

player.on('timeupdate', throttle(updateTime, 1000));
