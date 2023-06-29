import React from 'react';


const Nextitem = ({ name, price, image_url, onClick, isSelected}) => {
  const itemClassName = isSelected ? 'item first' : 'item';

    return (
        <div className={itemClassName} onClick={onClick}>
        <div className="rpic"><img src={image_url} alt="" /></div>
        <div className="text">
            <div className="name">{name}</div>
            <div className="price">{price}tg</div>
        </div>
      </div>
    );
}

export default Nextitem;