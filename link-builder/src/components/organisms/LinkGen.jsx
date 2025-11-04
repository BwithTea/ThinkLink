import InputField from '../molecules/inputField.jsx'
import SelectField from '../molecules/selectField.jsx'
import FormField from '../molecules/FormField.jsx'

export default function LinkGen({ time, setTime, jobTitle, setJob }) {
    return (
        <div>
            <FormField>
                <InputField id="job-title" label="Job Title" type="text" placeholder="Enter job title" value={jobTitle} onChange={setJob} />
            </FormField>
            
            <FormField>
                <SelectField id="time" label="Time" value={time} onChange={setTime} />
            </FormField>
        </div>
        
    )
}