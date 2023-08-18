import './Card.css'

function Card(title, url, desc) {
    return (
        <div className='card'>
            <div className='card_content'>
                <div className='card_content_image'>
                    <img src={ url } alt="" />
                </div>
                <div className='card_content_title'>
                    <h2>{title}</h2>
                </div>
                <div className='card_content_desc text-ellipsis'>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card