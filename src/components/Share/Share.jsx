import React from 'react'
import './share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
const Share = () => {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top flex">
                    <img src="public\assets\person\bala.jpg" alt="img" className="share-profile-img" />
                    <input type="text" placeholder="what's in your mind" className="share-input" />
                </div>
                <hr className='share-hr' />
                <div className="share-bottom flex items-center justify-between">
                    <div>
                        <div className="share-options">
                            <div className="share-option">
                                <PermMedia htmlColor="tomato" className='share-icon' />
                                <span className='share-option-text'>Photo/video</span>
                            </div>
                            <div className="share-option">
                                <Label htmlColor="blue" className='share-icon' />
                                <span className='share-option-text'>Tag</span>
                            </div>
                            <div className="share-option">
                                <Room htmlColor="green" className='share-icon' />
                                <span className='share-option-text'>Location</span>
                            </div>
                            <div className="share-option">
                                <EmojiEmotions htmlColor="goldenrod" className='share-icon' />
                                <span className='share-option-text'>Feelings</span>
                            </div>
                        </div>
                    </div>

                    <div className="share-button">
                        share
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share