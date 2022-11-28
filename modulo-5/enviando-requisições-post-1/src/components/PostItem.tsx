import { Post } from '../assets/types/posts'

type Props = {
    data: Post;
}

export function PostItem({ data }: Props) {
    return(
        <div className="my-4">
            <h4>{data.title}</h4>
            <small>#{data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </div>
    )
}