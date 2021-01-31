import React from 'react'
import { LOGO_WIDTH, LOGO_HEIGHT } from '../constants'
/**
 * Logo
 *
 * Note: 2:1 ratio
 */
import bakbar from "../../../assets/bakbar_white.png"

const Logo: () => JSX.Element = () => <img src={bakbar} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="logo" />

export default Logo