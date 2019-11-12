import React from 'react';
import '../TimelinePlayer/TimelinePlayer.scss';

const TimelinePlayer: React.FC = () =>
    <div className="timeline-player">
        <span>0:00</span>
        <div className="bar">
            <div className="pct"></div>
        </div>
        <span>0:00</span>
    </div>

export default TimelinePlayer    