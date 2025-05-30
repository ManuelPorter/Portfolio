import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";
export const TsSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={800}
    //height={800}
    viewBox="-100 -100 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: "visible" }}
    {...props}
  >
    <rect width={800} height={800} fill="" />

    <motion.g
      id="ts"
      clipPath="url(#clip0_0_1)"
      animate={{
        y: [0, -100, 0], // Jumping up and down
        x: [0, 0, -20, 20, 0], // Lateral movement for bounce effect
        rotate: [0, -10, 10, -5, 5, 0], // Slight rotation during the bounce
      }}
      transition={{
        duration: 1.5,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Sync the rotation with the bounce
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <g id="SVGRepo_iconCarrier">
        <path
          id="Vector"
          d="M0 87.5C0 39.1751 39.1751 0 87.5 0H712.5C760.825 0 800 39.1751 800 87.5V187.5C800 208.21 783.21 225 762.5 225C741.79 225 725 208.21 725 187.5V87.5C725 80.5965 719.405 75 712.5 75H87.5C80.5965 75 75 80.5965 75 87.5V712.5C75 719.405 80.5965 725 87.5 725H762.5C783.21 725 800 741.79 800 762.5C800 783.21 783.21 800 762.5 800H87.5C39.1751 800 0 760.825 0 712.5V87.5ZM237.5 325C237.5 304.29 254.29 287.5 275 287.5H462.5C483.21 287.5 500 304.29 500 325C500 345.71 483.21 362.5 462.5 362.5H412.5V625C412.5 645.71 395.71 662.5 375 662.5C354.29 662.5 337.5 645.71 337.5 625V362.5H275C254.29 362.5 237.5 345.71 237.5 325ZM563.785 329.006C584.72 304.082 617.535 287.5 662.5 287.5C704.245 287.5 735.74 301.783 756.97 324.24C771.195 339.291 770.525 363.026 755.475 377.253C740.425 391.479 716.69 390.811 702.465 375.76C696.97 369.949 686.02 362.5 662.5 362.5C637.465 362.5 626.53 370.918 621.215 377.244C614.67 385.032 612.5 394.8 612.5 400C612.5 405.2 614.67 414.967 621.215 422.755C626.53 429.082 637.465 437.5 662.5 437.5C666.285 437.5 669.94 438.061 673.38 439.104C706.535 443.823 731.595 458.625 748.715 479.005C768.42 502.465 775 530.2 775 550C775 569.8 768.42 597.535 748.715 620.995C727.78 645.92 694.965 662.5 650 662.5C608.255 662.5 576.76 648.215 555.53 625.76C541.305 610.71 541.975 586.975 557.025 572.745C572.075 558.52 595.81 559.19 610.035 574.24C615.53 580.05 626.48 587.5 650 587.5C675.035 587.5 685.97 579.08 691.285 572.755C697.83 564.965 700 555.2 700 550C700 544.8 697.83 535.035 691.285 527.245C685.97 520.92 675.035 512.5 650 512.5C646.215 512.5 642.56 511.94 639.12 510.895C605.965 506.175 580.905 491.375 563.785 470.995C544.08 447.533 537.5 419.8 537.5 400C537.5 380.2 544.08 352.468 563.785 329.006Z"
          fill="#2F6D9D"
        />
      </g>
    </motion.g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect width={900} height={900} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export { TsSvg as ReactComponent };
