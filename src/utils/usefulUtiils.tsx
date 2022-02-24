import * as React from 'react';

export const RoundNumber:number|any = (num:any) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2)
}  