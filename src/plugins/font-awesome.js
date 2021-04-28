import { faTimes, faCheck } from "@fortawesome/pro-solid-svg-icons";

import {
  faListAlt,
  faTh,
  faUserCog,
  faChevronUp as faChevronUpLight,
  faTrashAlt as faTrashAltLight,
  faPlus
} from "@fortawesome/pro-light-svg-icons";

// import { faTrashAlt as faTrashAltReg } from "@fortawesome/pro-regular-svg-icons";

const iconsSolid = {
  faTimes,
  faCheck
};
const iconsLight = {
  faListAlt,
  faTh,
  faUserCog,
  faChevronUpLight,
  faTrashAltLight,
  faPlus
};
// const iconsRegular = {
//   faTrashAltReg
// };

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(iconsSolid, iconsLight);

// Custom vue component for showing font-awesome icons
import FontAwesomeIcon from "@/libraries/FontAwesomeIcon.vue";
export { FontAwesomeIcon };
