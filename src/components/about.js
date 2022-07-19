import React from "react";
// Add a profile picture to the images
// import Avatar from ../

const About = () => {
  return <React.Fragment>

    <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        A Recreation Therapist turned Coder with a love for creativity. With a focus on front-end, the endless growth and possibilities of front end design is always an intriguing aspect, where HTML, CSS, JavaScript and React are skills learned.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />
  </React.Fragment>;
};
