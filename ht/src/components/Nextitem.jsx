import React from 'react';


<<<<<<< HEAD
const Nextitem = ({ name, price, image_url, onClick, isSelected}) => {
  const itemClassName = isSelected ? 'item first' : 'item';

    return (
        <div className={itemClassName} onClick={onClick}>
        <div className="rpic"><img src={image_url} alt="" /></div>
        <div className="text">
            <div className="name">{name}</div>
            <div className="price">{price}tg</div>
=======
const Nextitem = ({ name, birth_year, image_url, content, onClick, isSelected}) => {
  const itemClassName = isSelected ? 'price reveal' : 'price';

    return (
        <div className='item' onClick={onClick}>
        <div className="rpic"><img src={image_url} alt="" /></div>
        <div className="text">
            <div className="name">{name}</div>
            <div className={itemClassName}>{birth_year} year</div>
>>>>>>> d025ae6b82dd1517cea6671db4f2b7fda88febad
        </div>
      </div>
    );
}

export default Nextitem;

