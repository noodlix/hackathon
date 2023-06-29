import React from 'react';


const Nextitem = ({ name, birth_year, image_url, content, onClick, isSelected}) => {
  const itemClassName = isSelected ? 'price reveal' : 'price';

    return (
        <div className='item' onClick={onClick}>
        <div className="rpic"><img src={image_url} alt="" /></div>
        <div className="text">
            <div className="name">{name}</div>
            <div className={itemClassName}>{birth_year} year</div>
        </div>
      </div>
    );
}

export default Nextitem;

