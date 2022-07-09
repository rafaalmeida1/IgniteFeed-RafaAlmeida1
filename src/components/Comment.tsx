import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export const Comment = ({content, onDeleteComment}: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state)=> {
            return state + 1;
        });
    } //Poderia ficar no onClick essa função, mas para exemplo, coloquei a função sem ser executa lá abaixo.

    return(
        <div className="mt-6 flex gap-4">
            <Avatar hasBorder={false} src="https://github.com/rafaalmeida1.png" alt="" />

             <div className="flex-1"> {/* Vai ser toda a area do comentário, exceto o avatar. E aqui dentro, vou separar a parte mais cinza, e a parte do aplaudir */}
                <div className="bg-gray-700 rounded-lg p-4"> {/*Aqui sim será a parte cinza com o conteudo, abaixo disso será o aplaudir. */}
                    <header className="flex items-start justify-between"> {/*Aqui vai ser a parte com o nome do usuário, quando foi comentado e botão para deletar*/}
                        <div>
                            <strong className="block text-sm leading-relaxed">Rafael Almeida</strong>
                            <time
                                className="block text-[0.75] leading-relaxed text-gray-400" 
                                title="18 de julho às 16:14h" 
                                dateTime="2022-06-18 16:14:04"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            className="bg-transparent border-0 text-gray-400 cursor-pointer leading-[0] rounded-sm
                                hover:text-red-500"
                            onClick={handleDeleteComment} 
                            title="Deletar comentário"
                        >
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p className="mt-4 text-gray-300">{content}</p>
                </div>

                <footer className="mt-4">
                    <button
                        className="bg-transparent border-0 text-gray-400 cursor-pointer flex items-center rounded-sm
                        hover:text-green-300" 
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp className="mr-2"/>
                        Aplaudir <span className="before:content-['\2022'] before:py-0 before:px-1">{likeCount}</span> {/* Aqui vai ser o número de aplausos, colocamos como span, pois vai ter uma bolinha separando, e vou colocar isso através do css */}
                    </button>
                </footer>
            </div>      
        </div>
    )
}