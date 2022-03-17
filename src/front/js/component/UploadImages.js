import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export function UploadImages() {
    const [images, setImages] = useState([]);

    function onImageChange(e) {
        setImages([...e.target.files]);

    }

    return (
        <div>
            <button className="uploadProfileFile" onClick=
                {() => document.getElementById('getFile').click()}>UploadPicture</button>
            <input type='file' id="getFile" className="uploadPicInput"></input>
        </div>
    );

}