import React from 'react';

const Footer = (props) => {
    return(
        <div className="footerWrapper" aria-label="footer">
            <div className="footerAddress">
                <div className="addressDiv">
                    <div>235 Park Ave</div>
                    <div>Austin, TX</div>
                </div>
                <div className="footerContact">
                    <div>jarrod@jarrodyellets.com</div>
                    <div>512-555-2390</div>
                </div>
            </div>
            <div className="author">Jarrod Yellets | 2018</div>
            <div className="footerRight">
                <div className="footerSocial">
                        <div>Follow Pillow</div>
                        <div>
                            <i className="fab fa-facebook socialFoot"></i>
                            <i className="fab fa-instagram socialFoot"></i>
                            <i className="fab fa-twitter-square socialFoot"></i>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;