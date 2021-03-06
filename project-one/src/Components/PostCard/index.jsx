import './styles.css'

export const PostCard = ({title, body, id, cover}) => (
    <div className="post">
              <img src={cover} alt = {title}></img>
              <div key={id} className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
    </div>
) 