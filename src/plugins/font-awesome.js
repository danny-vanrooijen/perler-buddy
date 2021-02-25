import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faMinus,
  faPlus,
  faCheck
} from "@fortawesome/pro-solid-svg-icons";

// Custom vue component for showing font-awesome icons
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

const iconsSolid = {
  faTimes,
  faMinus,
  faPlus,
  faCheck
};

library.add(iconsSolid);

export { FontAwesomeIcon };
