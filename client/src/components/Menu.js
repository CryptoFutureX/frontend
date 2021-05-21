import React from 'react';

const Menu = ({ selected, list, changeSelectedCoin, name }) => {
    return (
        <div className='dropdown2'>
            <p className='name'>{name} : </p>
            <button
                className='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
            >
                {selected[name]}
            </button>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                {list.map((coin) => {
                    return (
                        <button
                            onClick={changeSelectedCoin}
                            className='dropdown-item'
                            name={name}
                            value={coin}
                            key={coin}
                        >
                            {coin}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
