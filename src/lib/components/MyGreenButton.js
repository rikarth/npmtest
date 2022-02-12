import { Button } from '@mui/material';
import React from 'react';

export function MyGreenButton({
	disabled,
	className,
    children,
	...props
}) {
    return (
       <Button className={className} style={{backgroundColor: 'green'}}
         {...props}>{children}</Button>
    )
 }