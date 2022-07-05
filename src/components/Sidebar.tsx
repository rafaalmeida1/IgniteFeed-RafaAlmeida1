import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className="bg-gray-800 rounded-lg overflow-hidden">{/*  isso serve para fazer a sidebar */}
            <img 
                className="w-full h-[92px] object-cover"
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className="flex flex-col items-center mt-[calc(0px-1.5rem-6px)]">
                <Avatar hasBorder={true} src="https://github.com/rafaalmeida1.png" /> 

                <strong className="mt-[1rem] text-gray-100 leading-relaxed">Rafael Almeida</strong>
                <span className="text-sm text-gray-400 leading-relaxed">Web Developer</span>
            </div>

            <footer className="border-t-[1px] border-solid border-gray-600 mt-[1.5rem] pt-[1.5rem] px-[2rem] pb-[2rem]">
                <a 
                    href="#"
                    className="w-full bg-transparent text-green-500 border border-green-500 rounded-lg h-[50px] py-0 px-5 font-bold no-underline flex items-center justify-center gap-2 transition-all duration-[0.1s]
                        hover:bg-green-500 hover:text-white"
                >
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside> 
    )   
}