/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoChevronLeft } from "react-icons/go";

export const PreviousArrow = ({className, style, onClick} : any) => <GoChevronLeft className={`${className} -ml-3 block w-8 h-8 text-black hover:text-secondary_light`} style={style} onClick={onClick} />
