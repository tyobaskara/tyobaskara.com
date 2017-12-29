import React from 'react';
require('./../vendor/lightwidget.js');

export const InstagramGallery = () => (
    <div>
        <div className="text-center" style={{marginTop: '20px'}}>
            <h3 className="orgTitle">Follow me on instagram</h3>
        </div>
        <div className="igWrapper" style={{padding: '20px 0'}}>
            <iframe src="//lightwidget.com/widgets/3718dfafcbac5ec7b993e46fde42e086.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width: '100%', border: 0, minHeight: '300px', overflow: 'hidden'}}></iframe>
        </div>
    </div>
);
