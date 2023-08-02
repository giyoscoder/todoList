import React from 'react';
import classes from './List.module.css'

const List:React.FC<{list: string; deleted: ()=> void}> = props => {

    return <>
        <li className={classes.item} onClick={props.deleted}>{props.list}</li>
    </>
}

export default List;