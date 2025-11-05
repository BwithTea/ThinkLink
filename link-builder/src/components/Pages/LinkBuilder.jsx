import LinkGen from '../organisms/LinkGen.jsx';
import Card from '../molecules/card.jsx';
import Button from '../atoms/button.jsx';
import Input from '../atoms/input.jsx';

import { useState } from 'react'

export default function LinkBuilder() {
    const [jobTitle, setJob] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    let disabled = !jobTitle || !time 

    return (
        <div className="Page-Container">
            <h1 className="app-title">LinkedIn Link Builder</h1>
            <Card>
                <LinkGen jobTitle={jobTitle} setJob={setJob} time={time} setTime={setTime} location={location} setLocation={setLocation} />
                <Button type="button" variant="final"  onClick={() => {
                    if (disabled) {
                        alert('Please pick a job title and time range before generating the link.');
                    } else {
                        const link = `https://www.linkedin.com/jobs/search/?f_TPR=r${time}&keywords=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}`;
                        setGeneratedLink(link);
                    }
                    
                }}> Generate Link</Button>
                <Input id="generated-link" type="text" value={generatedLink} readOnly />
            </Card>
        </div>
    )
}