import Link from "next/link"
import TeamSlider2 from '@/components/slider/TeamSlider2'


export default function Team() {
    return (
        <>
            
            {/*Start Team One */}
            <section className="team-one">
                <div className="container">
                    <div className="team-one__top">
                        <div className="sec-title">
                            <div className="sub-title">
                                <h5>OUR TEAM MEMBERS</h5>
                            </div>
                            <h2>Expert Team Behind <br/>
                                SmartLibrary Solutions</h2>
                        </div>
                    </div>

                    <TeamSlider2/>
                    {/*If we need navigatsion button */}
                </div>
            </section>
            {/*End Team One */}

        </>
    )
}
