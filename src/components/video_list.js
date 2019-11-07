import React from 'react';
import VideoListItem from './video_list_item';

// props는 함수형에서는 그대로 쓰나 클래스형에서는
// this.props로 접근해야한다
const VideoList = (props)=>{
    const videoItems = props.videos.map((e)=>{
        // list나 array등의 iterator들은 반드시 key속성을 가지고 있어야만 한다.
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={e.etag} 
            video={e} />
    });

    return  (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;