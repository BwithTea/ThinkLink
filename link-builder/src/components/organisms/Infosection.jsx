export default function InfoSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#e8f4ff",
        padding: "3rem 1rem",
        alignItems: "center",
        color: "#222",
      }}
    >
      <h1>About This Tool</h1>
      <p style={{ maxWidth: "1000px", textAlign: "center", lineHeight: "1.6", fontSize: "2rem" }}>
        The LinkedIn Link Builder helps you generate direct search links for
        recent job postings, saving you time when applying to the newest
        opportunities.
      </p>

      <h1>How to Use the Tool</h1>
      <div
        style={{
          maxWidth: "1000px",
          textAlign: "left",
          lineHeight: "1.8",
          background: "white",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          fontSize: "1.8rem",
        }}
      >
        <ol>
          <li>Enter your desired job title (e.g., “Software Engineer Intern”).</li>
          <li>Select the time range for postings (for example, within the last 2 hours).</li>
          <li>Click <strong>Generate Link</strong> to create your custom LinkedIn job search URL.</li>
          <li>Copy the link and open it in your browser and it will show results instantly.</li>
          <li>Use it to find brand-new jobs before they appear on major boards.</li>
        </ol>
        <br />
        <p>
          You can also fine-tune your link manually by adding parameters for
          experience level or location. For example:
          <br />
          <code>f_E=2</code> → Entry Level <br />
          <code>f_JT=I</code> → Internships
        </p>
      </div>

      <h1>Why Use This?</h1>
      <p style={{ maxWidth: "1000px", textAlign: "center", lineHeight: "1.6", fontSize: "2rem" }}>
        LinkedIn limits time filters to “Past 24 Hours.” and doesn't give you much control over this. This tool gives you
        precise control, down to the hour, helping you apply before listings
        get flooded with applicants.
      </p>
    </div>
  )
}
