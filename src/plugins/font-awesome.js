import { faTimes, faCheck } from "@fortawesome/pro-solid-svg-icons";
import {
  faListAlt,
  faTh,
  faUserCog,
  faChevronUp as faChevronUpLight
} from "@fortawesome/pro-light-svg-icons";

const iconsSolid = {
  faTimes,
  faCheck
};
const iconsLight = {
  faListAlt,
  faTh,
  faUserCog,
  faChevronUpLight
};

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(iconsSolid, iconsLight);

// Custom vue component for showing font-awesome icons
import FontAwesomeIcon from "@/libraries/FontAwesomeIcon.vue";
export { FontAwesomeIcon };
