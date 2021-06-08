import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div class="card text-white">
                <img style={{ height: '600px' }} src={`https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/newspaper/image`} class="card-img" alt="..." />
                <div class="card-img-overlay">
                </div>
            </div>
            <div className="container p-3">
                <div class="row row-cols-1 row-cols-md-2 g-4 ">
                    <div class="col">
                        <div class="card">
                            <img style={{ height: '200px' }} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuGVbaDfmIS13e36C6HQx7OvsOQ2Mbh4F1aADC14h-9Hq6cmLMVxxqrZhrd5O4yZLSnI&usqp=CAU`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Top News</h5>
                                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cumque similique nisi nostrum illo ducimus eligendi porro neque natus ratione.</p>
                                <Link to="/topNews"><button className="btn btn-info">READ</button></Link>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <div class="card">
                            <img style={{ height: '200px' }} src={`https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/1544496449-old-news.jpg`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Old News</h5>
                                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cumque similique nisi nostrum illo ducimus eligendi porro neque natus ratione.</p>
                                <Link to="/oldNews"><button className="btn btn-info">READ</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img style={{ height: '200px' }} src={`http://trans-pecosultra.com/wp-content/uploads/2015/12/sports-news.jpg`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sports News</h5>
                                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cumque similique nisi nostrum illo ducimus eligendi porro neque natus ratione.</p>
                                <Link to="/other"><button className="btn btn-info">READ</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img style={{ height: '200px' }} src={`https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/f5/ad/51/f5ad5168-9f3b-83db-cc3f-7f8ab81f94e8/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BBC News</h5>
                                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque cumque similique nisi nostrum illo ducimus eligendi porro neque natus ratione.</p>
                                <Link to="/other"><button className="btn btn-info">READ</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;