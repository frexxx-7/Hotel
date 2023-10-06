import React from 'react'
import classes from './MyAside.module.scss'
import { useStateContext } from '../../../context/ContextProvider'

const MyAside = () => {
    const { setShowAside } = useStateContext()
    return (
        <aside className={classes.MyAside}>
            Aside
            <div className={classes.cancel} onClick={()=>setShowAside(false)}>x</div>
        </aside>
    )
}

export default MyAside