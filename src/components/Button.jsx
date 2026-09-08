export default function Button({ href, text }) {
    return (
        <a href={href} target="_blank" className="button">  
            {text}
        </a>
    );
}