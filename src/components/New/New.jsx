import React from 'react'
import classes from './New.module.scss'

const New = (props) => {

    const newsInfo = props.new

    return (
        <div className={classes.newsContent}>
            <div className={classes.newsBlock}>
                <div className={classes.newBlockContent}>
                    <p className={classes.header}>
                        {newsInfo.title}
                    </p>
                    <p className={classes.content}>
                        {newsInfo.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default New