import React from 'react';


const Nextitem = ({ name, cost, src, onClick, isSelected}) => {
  const itemClassName = isSelected ? 'item first' : 'item';

    return (
        <div className={itemClassName} onClick={onClick}>
        <div className="rpic"><img src={src} alt="" /></div>
        <div className="text">
            <div className="name">{name}</div>
            <div className="price">{cost}tg</div>
        </div>
      </div>
    );
}

export default Nextitem;