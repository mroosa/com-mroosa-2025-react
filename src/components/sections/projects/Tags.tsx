
interface TagsProps {
    awards?: string[],
    tags?: string[]
}

const Tags = ({awards, tags}: TagsProps) => {

    if (awards || tags) {
        return (
            <ul className="tags" role="presentation" aria-label="Tags">
                {tags?.map((tag, key) => (
                    <li key={key}>{tag}</li>
                ))}
                {awards?.map((award, key) => (
                    <li key={key} className="award" role="presentation" aira-label="Awards">{award}</li>
                ))}
                
            </ul>
        )
    }
    return null
}

export default Tags;