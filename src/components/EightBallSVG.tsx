import { motion } from "framer-motion"

const EightBallSVG = () => (
  <motion.svg
    animate={{y: [-50, 0, -50]}}
        transition={{
            times: [0, 1],
            duration: 5,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut"
        }}  
    xmlns="http://www.w3.org/2000/svg"
    height={300}
    width={300}
    viewBox="0 0 72 72"
  >
    <circle cx={36} cy={35.958} r={29} fill="#3F3F3F" />
    <circle cx={36} cy={35.958} r={15} fill="#FFF" />
    <path
      fillOpacity={0.6}
      d="M50.738 10.998c4.825 5.18 7.782 12.123 7.782 19.76 0 16.016-12.984 29-29 29a28.857 28.857 0 0 1-14.664-3.984C20.145 61.42 27.653 64.958 36 64.958c16.016 0 29-12.984 29-29 0-10.631-5.73-19.911-14.262-24.96z"
    />
    
    <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
    >
      <circle cx={36} cy={35.958} r={29} />
      <circle cx={36} cy={32.595} r={3.363} />
      <circle cx={36} cy={40.31} r={4.352} />
    </g>
  </motion.svg>
)
export default EightBallSVG