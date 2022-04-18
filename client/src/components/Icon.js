import React from "react"
import { Image } from "react-native"

const Icon = ({ source, color, size }) => {
  return (
    <Image
      source={source}
      style={{ width: size, height: size, tintColor: color }}
    />
  )
}

export default Icon
