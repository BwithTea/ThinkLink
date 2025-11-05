import LinkGen from '../organisms/LinkGen.jsx';
import Card from '../molecules/card.jsx';
import Button from '../atoms/button.jsx';
import Input from '../atoms/input.jsx';
import FormField from '../molecules/FormField.jsx';

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
                
                <Button type="button" variant="final" onClick={() => {
                    if (disabled) {
                        alert('Please pick a job title and time range before generating the link.');
                    } else {
                        //Create a base url and build the link with parameters
                        const link = `https://www.linkedin.com/jobs/search/?f_TPR=r${time}&keywords=${encodeURIComponent(jobTitle)}&location=${encodeURIComponent(location)}`;
                        setGeneratedLink(link);
                    }
                    
                }}> Generate Link </Button>
                {/* Wrap this input in a form field so I can have a copy button */}
                <FormField>
                    <Input id="generated-link" type="text" value={generatedLink} readOnly />
                    <Button type="button" variant="copy" disabled={!generatedLink} onClick={() => {
                        navigator.clipboard.writeText(generatedLink);
                        alert('Link copied to clipboard!');
                    }}>Copy</Button>
                </FormField>
            </Card>
        </div>
    )
}