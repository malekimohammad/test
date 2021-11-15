import React from 'react'
import Navbar from './Navbar'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container-banner">
                    <Navbar />
                    <div className="banner-title">
                        <div className="content-banner">
                            <div className="title-banner">
                                <h1 className="title">پلی لیستتو بساز</h1>
                                <p className="subtitle">با استفاده از این وبسایت می توانید به راحتی پلی لیستی از فیلم های روز دنیا و ژانرهایی که به آن علاقه دارید رو برای خودتان ایجاد کنید.</p>
                                <button className="banner-btn">Explore</button>
                            </div>

                            <div className="card-banner">
                                <div className="row-card">
                                    <div className="card image-card-1">
                                        <h5>امتیاز فیلم ها</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="card image-card-2">
                                        <h5>انتخاب ژانر</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="row-card">
                                    <div className="card image-card-3">
                                        <h5>جستوجوی سریع</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="card image-card-4">
                                        <h5>فیلم های به روز</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Banner
