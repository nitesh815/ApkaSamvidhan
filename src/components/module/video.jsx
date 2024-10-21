import React from "react";
import Sidebar from "../module/Sidebar";
import Back from "../common/back/Back";
import "./scrollable.css"

const Video = () => {
    return (
        <>
            <Back title='M1' />

            <div class="flex">
                <Sidebar />
                <div className='container scrol'>
                    <>
                        <div className="video">
                            <iframe width="1000" height="550" src="https://www.youtube.com/embed/aE6Pdy-Bs6g?si=5RMOUyluguNguBAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </>
                </div>
            </div>
        </>
    )
}
export default Video;