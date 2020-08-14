import {getStorybookUI, configure} from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories/Cards/Portrait/index.stories.js');
}, module);

const StorybookUIRoot = getStorybookUI({
  onDeviceUI: false,
  asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.

export default StorybookUIRoot;
