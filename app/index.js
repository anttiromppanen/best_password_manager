import { FullScreenAnimation } from '../components'
const splashAnimation = require('../assets/animations/splashAnimation.json');
import { theme } from '../styles';

const colorFilters = [
  // Rotating loader ring
  { keypath: 'Shape Layer 2', color: theme.colors.success },
  // Background
  { keypath: 'Artwork 25 Outlines', color: theme.colors.success },
  // Lock
  { keypath: 'Artwork 26 Outlines', color: theme.colors.background },
]

export default function Index() {
  return <FullScreenAnimation
    animationSource={splashAnimation}
    redirectUrl='/home'
    colorFilters={colorFilters}
  />;
}
