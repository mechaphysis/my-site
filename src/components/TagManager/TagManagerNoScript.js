import React, {Fragment} from "react"

export default () =>
    <Fragment>
        <noscript dangerouslySetInnerHTML={{
            __html: `
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWN3LT8"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `
        }}/>
    </Fragment>