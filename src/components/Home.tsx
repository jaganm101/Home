import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="home-page">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="display-4 mb-4">வீட்டு விவரங்கள் பயன்பாட்டிற்கு வரவேற்கின்றேன்!</h2>
                        <p className="lead mb-4">
                            இந்த பயன்பாடு வீட்டு உள்செறிவு மற்றும் தோராயமாக உள்ள கதவுகள் மற்றும் ஓவியங்களை பற்றிய
                            விரிவான தகவல்களை வழங்குகிறது.
                        </p>
                        <p className="lead mb-5">
                            இந்த செயலியில் நீங்கள் விரும்பும் பரபரப்பான வண்ணங்கள் மற்றும் கதவுகளின் விவரங்களை தெரிந்து
                            கொள்ளலாம். வீட்டு அழகை உருவாக்கும் விதமாக சிறந்த நிறம் தேர்வுகள் மற்றும் அழகிய கதவுகளை நீங்கள்
                            காணலாம்.
                        </p>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-md-5 mb-4">
                        <div className="card shadow-lg rounded">
                            <img
                                src="/Home/images/master_bed_room.png"
                                alt="Painting"
                                className="card-img-top"
                                style={{ objectFit: 'cover', height: '200px' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">ஓவிய விளக்கம்</h5>
                                <p className="card-text">
                                    உங்கள் வீடு மற்றும் அறைகளுக்கு ஏற்ற வண்ண தேர்வுகளை எவ்வாறு செய்ய வேண்டும் என்று
                                    அறியவும். இந்த செயலி உங்கள் வீட்டின் ஓவிய வடிவமைப்பை தனிப்பயனாக்க உதவும்.
                                </p>
                                <a href="/Home/painting-details" className="btn btn-primary">
                                    மேலும் அறிய
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mb-4">
                        <div className="card shadow-lg rounded">
                            <img
                                src="/Home/images/green_door.png"
                                alt="Door"
                                className="card-img-top"
                                style={{ objectFit: 'cover', height: '200px' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">கதவுகளின் விளக்கம்</h5>
                                <p className="card-text">
                                    உங்கள் வீட்டு கதவுகளுக்கான சிறந்த தேர்வுகளை எப்படி செய்வது என்பதை அறியவும்.
                                    இந்த செயலி உங்கள் வீட்டு கதவுகளின் அழகையும் தனித்துவத்தையும் காட்ட உதவும்.
                                </p>
                                <a href="/Home/door-details" className="btn btn-primary">
                                    மேலும் அறிய
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
