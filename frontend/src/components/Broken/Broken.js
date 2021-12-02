import React from 'react';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import './broken.css'

const Broken = () => {
    return (
        <>
            <div className="brokenCont">
                <LinkOffIcon style={{ "fontSize": "100", "color": "red" }}
                />
                <span className="pageNot">
                    This page isn't available
                </span>
                <span className="desc">
                    The link may be broken, or the page may have been removed.
                    Check to see if the link you're trying to open is correct.
                </span>
            </div>
        </>
    );
}

export default Broken;
