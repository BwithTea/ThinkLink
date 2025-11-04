import LinkGen from '../organisms/LinkGen.jsx';
import Card from '../molecules/card.jsx';
import Button from '../atoms/button.jsx';
import Input from '../atoms/input.jsx';

import { useState } from 'react'

export default function LinkBuilder() {
    const [jobTitle, setJob] = useState("");
    const [time, setTime] = useState("");
    
    return (
        <div className="Page-Container">
            <h1 className="app-title">LinkedIn Link Builder</h1>
            <Card>
                <LinkGen jobTitle={jobTitle} setJob={setJob} time={time} setTime={setTime} />
                <Button type="button" variant="final"> Generate Link</Button>
                <Input id="generated-link" type="text" value={`https://www.linkedin.com/jobs/search/?f_TPR=r${time}&keywords=${encodeURIComponent(jobTitle)}`} readOnly />
            </Card>
        </div>
    )
}