import React from 'react'
import check from '../../assets/pricing/desktop/check.svg'
import './CompareStyle.css'
const Compare = () => {
    return (
    <>
        <div className="CompareContainer">
            <h1 className='CompareTitle'>COMPARE</h1>
            <div className='CompareTable'>
                <div className='Firscell'>
                    <div className=''>THE FEATURES</div>
                    <div className=''>BASIC</div>
                    <div className=''>PRO</div>
                    <div className=''>BUSINESS</div>
                </div>
                    
                <div className="CompareRow">
                    <div className=''>UNLIMITED STORY POSTING</div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>

                <div className="CompareRow">
                    <div className=''>UNLIMITED PHOTO UPLOAD</div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
                <div className="CompareRow">
                    <div className=''>EMBEDDING CUSTOM CONTENT</div>
                    <div className=''></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
                <div className="CompareRow">
                    <div className=''>CUSTOMIZE DATA</div>
                    <div className=''></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
                <div className="CompareRow">
                    <div className=''>ADVANCED METRICS</div>
                    <div className=''></div>
                    <div className=''></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
                <div className="CompareRow">
                    <div className=''>PHOTO DOWNLOADS</div>
                    <div className=''></div>
                    <div className=''></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
                <div className="CompareRow">
                    <div className=''>SEARCH ENGINE INDEXING</div>
                    <div className=''></div>
                    <div className=''></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
                <div className="CompareRow">
                    <div className=''>CUSTOM ANALYTICS</div>
                    <div className=''></div>
                    <div className=''></div>
                    <div className=''><img src={check} alt="check-icone" /></div>
                </div>
            </div>
        </div>


            <div className="CompareContainerM">
                <div className="CompareTitle">
                    THE FEATURES
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        UNLIMITED STORY POSTING
                    </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                            <img src={check} alt="check-icone" />
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            <img src={check} alt="check-icone" />
                        </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        UNLIMITED PHOTO UPLOAD
                    </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                            <img src={check} alt="check-icone" />
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            <img src={check} alt="check-icone" />
                        </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        EMBEDDING CUSTOM CONTENT
                        </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            <img src={check} alt="check-icone" />
                            </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        CUSTOMIZE METADATA
                        </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            <img src={check} alt="check-icone" />
                            </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        ADVANCED METRICS
                        </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            
                            </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        PHOTO DOWNLOADS
                        </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            
                            </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        SEARCH ENGINE INDEXING
                        </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            
                            </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>
                <div className="CompareCard">
                    <div className="CompareCardTitle">
                        CUSTOM ANALYTICS
                        </div>
                    <div className="CompareCardCheck">
                        <div className="CompareCardItems">
                            <p>BASIC</p>
                        </div>
                        <div className="CompareCardItems">
                            <p>PRO</p>
                            
                            </div>
                        <div className="CompareCardItems">
                            <p>BUSINESS</p>
                            <img src={check} alt="check-icone" />
                        </div>
                    </div>
                </div>                

            </div>
        
    </>
    )
}

export default Compare
