const turnOnLoader = () => {
   return {
      type: "TURN_ON_LOADER",
   }
}

const turnOffLoader = () => {
   return {
      type: "TURN_OFF_LOADER",
   }
}

export { turnOnLoader, turnOffLoader }
