import React from 'react'
import classes from './OneNews.module.scss'

const OneNews = ({ newsInfo }) => {
    return (
        <div className={classes.infoNews}>
            {
                newsInfo ?
                    <div className={classes.News}>
                        <div className={classes.newsContent}>
                            {
                                newsInfo.image &&
                                <div className={classes.image}>
                                    <img src={newsInfo.image} alt="image" />
                                </div>
                            }
                            <div className={classes.title}>
                                {newsInfo.title}
                            </div>
                        </div>
                        <div className={classes.content}>
                            {newsInfo.content}
                        </div>
                    </div>
                    :
                    <div className={classes.loader}>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
            }
        </div >
    )
}

export default OneNews