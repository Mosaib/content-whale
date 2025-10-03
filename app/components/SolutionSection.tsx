'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMagnifyingGlass, faLanguage } from "@fortawesome/free-solid-svg-icons";



export default function HeroSection() {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(90deg, #f3f0ff, #fff7e6)' }}>
        <div className="partner container">
          <h1 className='text-center'>
            Choose the Solution{" "}
            <span
                style={{
                backgroundImage:
                    "linear-gradient(90deg, #42175A 0%, #811861 18.02%, #BB2A5D 35.73%, #E44E49 55%, #FA8333 75.31%, #FBBB18 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                }}
            >
                that Best Suits You
            </span>
            </h1>
            <div className="mt-3 row g-4">
                <div className="col-md-4">
                    <div className="card h-100">
                        <FontAwesomeIcon icon={faPen} className='m-4 my-3' style={{ fontSize: "30px" }} />
                        <h3 className="m-4 my-3 solutionCard" style={{
                        backgroundImage:
                        "linear-gradient(88.7deg, #42175B -1.34%, #7E08C3 99.64%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                        }}>Content Writing</h3>


                    <Image src="/solution/1.png" width={400} height={300} alt="solution1" className="logo-image w-100" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="mx-4 my-3 d-flex align-items-center">
                        <span style={{ fontSize: "28px", fontWeight: "bold" }}>SE</span>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className=""
                            style={{ fontSize: "30px" ,marginTop: "2px"}}/>
                        </div>

                        <h3 className="m-4 my-1 solutionCard" style={{
                        backgroundImage:
                        "linear-gradient(91.9deg, #0D7AB6 0.44%, #3DBAFF 99.56%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                        }}>SEO Services</h3>
                    <Image src="/solution/2.png" width={400} height={300} alt="solution2" className="logo-image w-100" />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <FontAwesomeIcon icon={faLanguage} className='m-4 my-3' style={{ fontSize: "30px" }} />
                        <h3 className="m-4 my-3 solutionCard" style={{
                        backgroundImage:
                        "linear-gradient(92.83deg, #FBBA18 0.65%, #FCA100 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                        }}>Content Writing</h3>


                    <Image src="/solution/3.png" width={400} height={300} alt="solution3" className="logo-image w-100" />
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}