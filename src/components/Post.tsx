import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, InvalidEvent, SetStateAction, useState } from 'react';
import { useId } from 'react-id-generator';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

interface Avatar {
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Avatar;
    content: Content[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito fera, hein?!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const [htmlId] = useId();

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
            locale: ptBR,
        }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true // algo antes da data, no caso um "há"
    })

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault();

        setComments(state => [...state, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className="bg-gray-800 rounded-lg p-10 first:mt-0 mt-[2rem]">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar
                        hasBorder={true}
                        src={author.avatarUrl}
                    />
                    <div className="flex flex-col">
                        <strong className="text-gray-100 leading-relaxed">{author.name}</strong>
                        <span className="text-sm text-gray-400 leading-relaxed">{author.role}</span>
                    </div>
                </div>

                <time
                 className="text-sm text-gray-400"
                 title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className="leading-relaxed text-gray-300 mt-6">
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content} className="mt-4">{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content} className="mt-4"><a href="" 
                            className="font-bold text-green-500 no-underline hover:text-green-300"
                        >{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} 
                className="w-full mt-6 pt-6 border-t border-gray-600 group"
            >
                <strong className="leading-relaxed text-gray-100">Deixe seu feedback</strong>

                <textarea
                    className="w-full bg-gray-900 border-none resize-none h-24 p-4 rounded-lg
                        text-gray-100 leading-[1.4] mt-4"
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer className="group-focus-within:visible group-focus-within:max-h-fit invisible max-h-0 ">
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                        className="py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-white font-bold cursor-pointer transition-all duration-[0.001s]
                            disabled:opacity-[0.7] disabled:cursor-not-allowed
                            hover:bg-green-300 disabled:hover:bg-green-500
                        "
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div className="mt-8">
                {comments.map(comment => (
                    <Comment
                        key={htmlId}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}