import { ImgHTMLAttributes } from 'react'

import classNames from "classnames";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder, ...props }: AvatarProps) { //Se essa propriedade não possuir nenhum valor, o valor dela vai ser true
    //...props me traz todas as propriedades que estão na interface AvatarProps, e a interface AvatarProps, extende as propriedades de ImgHTMLAttributes
    
    return (
        <img
            className={classNames('rounded-lg', {
                'w-[calc(3rem+12px)] h-[calc(3rem+12px)] border-4 border-gray-800 outline outline-2 outline-green-500': hasBorder,
                'w-[3rem] h-[3rem]': !hasBorder,
            })}
            {...props}
        />
    )
}
