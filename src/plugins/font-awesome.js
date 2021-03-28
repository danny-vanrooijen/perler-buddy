import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faMinus,
  faPlus,
  faCheck,
  faChevronUp
} from "@fortawesome/pro-solid-svg-icons";

// Custom vue component for showing font-awesome icons
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

const iconsSolid = {
  faTimes,
  faMinus,
  faPlus,
  faCheck,
  faChevronUp
};

library.add(iconsSolid);

export { FontAwesomeIcon };
