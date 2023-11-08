import React from 'react'
import classes from './New.module.scss'
import { useNavigate } from 'react-router-dom'

const New = (props) => {

    const newsInfo = props.new

    const navigate = useNavigate()

    return (
        <div className={classes.newsContent}>
            <div className={classes.newsBlock} onClick={() => navigate(`/news/${newsInfo.id}`)}>
                <div className={classes.newsContentBlock}>
                    {
                        newsInfo.image &&
                        <div className={classes.image}>
                            <img src={newsInfo.image} alt="image" />
                        </div>

                    }
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
        </div>
    )
}
export default New