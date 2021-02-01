import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

library.add(fas, fab, far, fal);

export { FontAwesomeIcon };
