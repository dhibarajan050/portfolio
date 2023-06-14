import React from 'react';
import './loding_style.scss';

function Loading() {
    return (
        <div className="preloader">
            <div class="e-loadholder">
			<div class="m-loader">
				<span class="e-text">Loading</span>
			</div>
		</div>
		<div id="particleCanvas-Blue"></div>
		<div id="particleCanvas-White"></div>
        </div>
    )
}

export default Loading
