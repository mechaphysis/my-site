import React, {Fragment} from "react"

export default () =>
    <Fragment>
        <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = []`
        }}/>
    </Fragment>