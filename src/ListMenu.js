import React from 'react';

export default function ListMenu({id, data, activeList, onClick}) {
    const handleClick = (id) => {
        if (id) {
            onClick(id);
        }
    }
    return (
        <ul
            hidden={activeList != id}
            data-menu-id={id}
            data-parent-menu-id={data.parentId}
        >
            {data.parentId && (
                <li>
                    <button onClick={() => {handleClick(data.parentId)}}> 
                        Go to previous menu
                    </button>
                </li>
            )}
            {data.items.map((item, idx) => (
                <li
                    key={idx}
                    onClick={() => {handleClick(item.listId)}}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    )
}