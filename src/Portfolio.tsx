import * as React from 'react';

export const Portfolio: React.FC = () => {
    return (
        <div className='portfolio'>
            <h2>Graphics &amp; Public Outreach</h2>
            <img src="img/graf/ARV-Poster.png" />
            <img src="img/graf/opioids.jpg" />
            <div className="image-box">
            <img src="img/graf/EHOST1.png" />
            <img src="img/graf/EHOST2.png" />
            <img src="img/graf/EHOST3.png" />
            </div>
            <div className="image-box">
            <img src="img/graf/Lifesciences-2014.png" />
            <img src="img/graf/Lifesciences-2015.png" />
            </div>
            <div className="image-box">
            <img src="img/graf/NPEP1.png" />
            <img src="img/graf/NPEP2.png" />
            </div>
            <div className="image-box">
            <img src="img/graf/TasP-Flyer.png" />
            <img src="img/graf/TasP-Flyer2.png" />
            </div>
            <img src="img/graf/SHAPE.jpg" />

            <h2>Interactive</h2>
            <div className="image-box">
                <img src="img/intv/guidelines-root.png" />
                <img src="img/intv/guidelines-acute.png" />
                <img src="img/intv/guidelines-monitoring.png" />
                <img src="img/intv/guidelines-picker.png" />
            </div>
            {/*<img src="img/intv/guidelines-thumb.png" />*/}
            <img src="img/intv/miseq-pipeline.png" />

            <h2>Publishing</h2>
            <div className="image-box">
                <img src="img/publ/Opioid-Guidelines1.png" />
                <img src="img/publ/Opioid-Guidelines2.png" />
                <img src="img/publ/Opioid-Guidelines3.png" />
            </div>
            <div className="image-box">
                <img src="img/publ/evidence-oat1.png" />
                <img src="img/publ/evidence-oat2.png" />
            </div>
            <div className="image-box">
                <img src="img/publ/opioid-crisis1.png" />
                <img src="img/publ/opioid-crisis2.png" />
                <img src="img/publ/opioid-crisis3.png" />
            </div>
            <div className="image-box">
                <img src="img/publ/stop-monitoring1.png" />
                <img src="img/publ/stop-monitoring2.png" />
                <img src="img/publ/stop-monitoring3.png" />
            </div>

            <h2>Science Graphics (Print)</h2>
            <img src="img/scid/Averted-Cases.png" />
            <img src="img/scid/CANOC-CD4-Median.png" />
            <img src="img/scid/CANOC1.png" />
            <img src="img/scid/CANOC2.png" />
            <img src="img/scid/Cascade-TasP.png" />
            <img src="img/scid/Group-Sex.png" />
            <img src="img/scid/STOP-Timeline.png" />
            <img src="img/scid/VDL-Network-Model.png" />
            <img src="img/scid/engage-pcs-1.png" />
            <img src="img/scid/engage-pcs-2.png" />
            <img src="img/scid/lancet-2011-3d.png" />
            <img src="img/scid/prevention-efficacy-review.png" />
        </div>
    )
}