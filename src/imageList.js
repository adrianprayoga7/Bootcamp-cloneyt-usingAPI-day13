import React from 'react';
import './imageList.css';
import ImageCard from './imageCard.js';

//untuk mencari foto yang dicari sesuai inputan searchbar
const ImageList = (props) => {
    const imgs = props.foundImages.map(img => {
        return <ImageCard key={img.id} image={img} />
    });
    return (
        <div className="image__list">{imgs}</div>
    )
}

export default ImageList;