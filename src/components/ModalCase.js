import React from "react";
import { Link } from 'react-router-dom';
import Films from "./Films";
export default function ModalCase({ setIsOpen }) {
    return (
        <div className='modal-show' pnClicl={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{ display: 'block', top: '35%' }}>
                <div className="moal-content">
                    <h4>Video for</h4>
                    <p style={{ textAlign: 'center' }}>
          <iframe
            width="560"
            height="315"
            src={Films.Video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close red-text">Close</a>
                </div>
            </div>
        </div>
    )
}