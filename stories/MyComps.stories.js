import { CottonAnim1 } from '../animations/CottonAnim1';
import { CottonAnim2 } from '../animations/CottonAnim2';
import { ProgressBar } from '../comps/ProgressBar';
import { ButtonWhite } from '../comps/ButtonWhite';
import { ShareContainer } from '../comps/ShareContainer';
import { AnimationContainer } from '../comps/AnimationContainer';

import {ButtonGreen} from '../comps/ButtonGreen';
import {BlueText} from '../comps/BlueText'

export default {
    title: "My Components"
}
export const cottonAnim1 = () => CottonAnim1;
export const cottonAnim2 = () => CottonAnim2;
export const progressBar = () => ProgressBar;
export const buttonWhite = () => ButtonWhite;
export const shareContainer = () => ShareContainer;
export const animationContainer = () => AnimationContainer;

export const GButton = () => ButtonGreen;
export const BText = () => BlueText;
