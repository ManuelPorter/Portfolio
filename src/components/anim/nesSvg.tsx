import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const NesSvg = (props: SVGProps<SVGSVGElement>) => (
  <motion.svg
    width="150px" // Adjust the size as needed
    height="150px"
    initial={{ rotate: 0 }}
    animate={{
      rotate: -360, // Rotate clockwise
    }}
    transition={{
      duration: 2, // Duration for one full rotation
      ease: "easeOut", // Start fast and slow down
      repeat: Infinity, // Loop infinitely
      repeatDelay: 1, // Pause for 1 second between repeats
    }}
    viewBox="-100 -100 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: "visible" }}
  >
    <g id="nes">
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M462.175 50C457.371 50.0671 452.609 50.9114 448.075 52.5C488.45 79.05 440.825 117.5 463.075 150C461.542 139.068 463.281 127.928 468.073 117.984C472.865 108.039 480.495 99.7373 490 94.125C497.125 88.2 501.7 86.075 500.175 76.275C497.7 60.225 476.3 50 462.175 50ZM519.675 60.35C514.1 88.425 507.175 89.45 486.6 107.525C478.575 113.852 472.912 122.694 470.522 132.63C468.132 142.565 469.155 153.016 473.425 162.3C388.425 129.3 279.475 109.35 199.6 166.45C170.875 186.975 153.35 216.45 117.925 228.475C95.025 236.325 72.525 234 58.175 256.7C52.9268 263.255 50.1852 271.465 50.4418 279.858C50.6983 288.251 53.9363 296.278 59.575 302.5C63.85 306.875 72.075 309.675 75.475 314.125C77.45 316.625 77.4 319.125 79.275 322.45C82.5886 330.199 87.3775 337.229 93.375 343.15C97.05 346.175 109.675 349.125 111.825 352.35C114.525 356.375 107.525 372.35 113.4 374.85C117.35 376.675 128.925 356.25 130.05 354.45C127.75 370.525 124.725 399.05 142.8 375.3C151.375 364.025 151.9 360.3 166.325 357.8C175.556 356.196 184.886 355.227 194.25 354.9C247.743 353.029 299.915 371.747 340.017 407.198C380.12 442.649 405.096 492.132 409.8 545.45C407.1 532.95 390.775 512.95 375.575 517.7C369.1 519.7 366.7 530.875 362.45 537.35C357.077 545.56 350.456 552.881 342.825 559.05C344.117 546.93 343.509 534.683 341.025 522.75C336.475 541.45 327.35 572.475 304.375 567.45C296.721 566.282 289.55 562.985 283.68 557.937C277.81 552.889 273.477 546.292 271.175 538.9C268.2 519.9 288.275 497.625 256 496.05C191.25 492.875 206.225 588.1 244.45 612.925C235.665 613.897 227.096 616.286 219.075 620C243.356 634.102 270.716 642.056 298.773 643.171C326.83 644.287 354.735 638.529 380.059 626.399C405.383 614.269 427.36 596.135 444.077 573.574C460.793 551.013 471.744 524.709 475.975 496.95C481.539 522.371 481.411 548.709 475.6 574.075C472.494 587.555 467.846 600.633 461.75 613.05C453.486 629.822 442.505 645.112 429.25 658.3C421.4 666.075 407 673.9 402.05 681.825C432.349 677.808 461.957 669.666 490.05 657.625C460.969 697.458 422.24 729.245 377.5 750C425.47 746.606 471.84 731.326 512.429 705.536C553.019 679.747 586.55 644.26 610 602.275C602.526 644.264 585.927 684.102 561.375 718.975C594.398 696.867 622.494 668.17 643.897 634.686C665.301 601.202 679.55 563.654 685.75 524.4C691.907 553.135 693.668 582.637 690.975 611.9C718.103 574.206 736.428 530.907 744.601 485.191C752.774 439.475 750.587 392.508 738.2 347.75C728.726 312.956 714.518 279.628 695.975 248.7C688.815 236.649 680.977 225.014 672.5 213.85C669.175 209.525 651.4 193.7 651.4 188.85C651.25 189.333 651.125 189.333 651.025 188.85C651.025 270.05 563.525 322.175 490.25 300.425C518.112 298.264 544.447 286.829 565.048 267.945C585.649 249.062 599.328 223.82 603.9 196.25C607.949 167.326 601.741 137.898 586.356 113.073C570.971 88.2487 547.379 69.5949 519.675 60.35Z"
        fill="#EA2845"
      />
    </g>
  </motion.svg>
);

export { NesSvg as ReactComponent };
