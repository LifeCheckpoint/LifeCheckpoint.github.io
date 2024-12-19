import React, { memo } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'


const FriendCard = memo(({ friend }) => (
    <li className={clsx(styles.friendCard, 'padding-vert--sm padding-horiz--md')}
        data-tooltip-content={friend.tips}
        data-tooltip-id={friend.tips ? "tooltip" : null}
        data-tooltip-place={friend.tips ? 'top' : null}
    >
        {
            friend.avatar ? <img
                src={friend.avatar}
                alt={friend.title}
                className={clsx(styles.friendCardImage)}
            /> : null
        }
        <div className="card__body" >
            <div className={clsx(styles.friendCardHeader)}>
                <h4 className={styles.friendCardTitle}>
                    <Link to={friend.website} className={styles.friendCardLink} rel="">
                        {friend.title}
                    </Link>
                </h4>
            </div>
            {friend.cname ? <p className={styles.friendCardCName}>{friend.cname}</p> : null}
            <p className={styles.friendCardDesc}>{friend.description}</p>
        </div>
    </li>

))

export default FriendCard