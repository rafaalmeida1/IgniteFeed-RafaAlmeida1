import classNames from "classnames";

interface AvatarProps {
    hasBorder: boolean;
    src: string;
}

export function Avatar({ hasBorder, src }: AvatarProps) { //Se essa propriedade não possuir nenhum valor, o valor dela vai ser true
    return (
        <img
            className={classNames('rounded-lg', {
                'w-[calc(3rem+12px)] h-[calc(3rem+12px)] border-4 border-gray-800 outline outline-2 outline-green-500': hasBorder,
                'w-[3rem] h-[3rem]': !hasBorder,
            })}
            src={src}
        />
    )
}
