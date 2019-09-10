import React, {Fragment} from "react"

export default () =>
    <Fragment>
        <script dangerouslySetInnerHTML={{ 
            __html: `fbq('track', 'ViewContent', {
                content_name: 'A simple gatsby static blog',
                content_category: 'Blogs > Technology'
            });`
            
        }}/>    
        </Fragment>