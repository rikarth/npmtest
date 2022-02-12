import React from 'react';

export function MyGreenButton({
	disabled,
	className,
    children,
	...props
}) {
    return (
       <button className={className} style={{backgroundColor: 'green'}}
         {...props}> 
            {children}
       </button>
    )
 }