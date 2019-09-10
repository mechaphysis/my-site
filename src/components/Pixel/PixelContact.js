import React, {Fragment } from "react"

export default () => 
    <Fragment>
        <script dangerouslySetInnerHTML={{ 
            __html: `fbq('track', 'Contact');`
            }}/>
    </Fragment>