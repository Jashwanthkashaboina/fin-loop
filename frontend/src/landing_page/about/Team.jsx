import React from 'react';

function Team() {
    return ( 
        // <div className="container mt-5">
        //     <div className="row border-top">
        //         <h1 className='fs-1 text-center mt-5 p-3'>People</h1>
        //     </div>
        //     <div className="row mt-5 fs-6 text-muted" style={{ lineHeight: "1.8",fontSize: "1.2em" }}>
        //         <div className="col-6 p-3 text-center">
        //             <img src='media/images/Jashwanth_1.png' alt='Founder/CEO' style={{borderRadius: "50%", width: "60%"}}/>
        //             <div className="mt-4">
        //                 <h4 className="mb-1">Jashwanth Kashaboina</h4>
        //                 <p className="text-muted mb-0">Full Stack Developer</p>
        //             </div>
        //         </div>
        //         <div className="col-6 p-5">
        //             <p>
        //                 Nithin bootstrapped and founded FinLoop in 2010 to overcome the 
        //                 hurdles he faced during his decade long stint as a trader. Today, 
        //                 FinLoop has changed the landscape of the Indian broking industry.
        //             </p>
        //             <p>
        //                 He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and 
        //                 the Market Data Advisory Committee (MDAC).
        //             </p>
        //             <p>Playing basketball is his zen.</p>
        //             <pre>
        //                 Connect on <a href=''>Homepage</a> /
        //                 <a href=''> TradingQ&A</a> /
        //                 <a href=''> Twitter</a>
        //             </pre>
        //         </div>
        //     </div>
        // </div>

        <div className="container mt-5">
            <div className="row border-top">
                <h1 className="text-center mt-5">Meet the Developer</h1>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-lg-8 text-center">

                    <img
                        src="media/images/Jashwanth_1.png"
                        className="d-block mx-auto"
                        alt="Jashwanth"
                        style={{
                            width: "250px",
                            height: "250px",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                    />

                    <h3 className="mt-4 mb-1">Jashwanth Kashaboina</h3>
                    <p className="text-muted fs-5">Full Stack Developer</p>

                    <div
                        className="text-muted mt-5 text-start"
                        style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
                    >
                        <p>
                            I'm a passionate Full Stack Developer and final-year
                            Computer Science student with a strong interest in building
                            scalable web applications and solving real-world problems.
                        </p>

                        <p>
                            I enjoy working with the MERN stack, Docker, Redis, and
                            modern backend technologies. Alongside development, I
                            actively practice Data Structures and Algorithms to improve
                            my problem-solving skills.
                        </p>

                        <p>
                            Outside coding, I contribute to open source, build personal
                            projects, and continuously learn new technologies.
                        </p>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Team;