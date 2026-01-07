import { useState } from "react";
import axios from "axios";
import "./customize.css";

function Customize() {
  const [longUrl, setLongUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [copied, setCopied] = useState(false);

  const createShort = async () => {
    try {
      const res = await axios.post("http://localhost:5001/shorten", {
        longUrl,
        custom,
      });

      setShortUrl(res.data.shortUrl);
      const id = res.data.shortUrl.replace("http://localhost:5001/", "");
      setShortId(id);
      setCopied(false);
    } catch (err) {
      console.error(err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="custom-wrapper">
      <div className="custom-card">
        <h1 className="head1">Customize URL Shortener</h1>

        <div className="custom-content">
          <div className="custom-left">
            <input
              className="longurl"
              type="text"
              placeholder="Enter long URL"
              onChange={(e) => setLongUrl(e.target.value)}
            />

            <input
              className="customurl"
              type="text"
              placeholder="Custom short URL (optional)"
              onChange={(e) => setCustom(e.target.value)}
            />

            <button onClick={createShort} className="generate">
              Generate Short URL
            </button>

            {shortId && (
              <div className="result">
                <span>
                  Short URL:{" "}
                  <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                    {shortId}
                  </a>
                </span>
                <button className="copy-btn" onClick={copyToClipboard}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
          </div>

          <div className="custom-right">
            <h3>Why Customize?</h3>
            <p>
              Customize your short URL to make it unique and easy to remember.
              Personalized links look more professional and help build trust.
              This is ideal for branding, marketing, and clear sharing.
            </p>
          </div>
        </div>
      </div>
      {/* Features */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Create short URLs instantly with our high-performance service</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>All URLs are encrypted and served over HTTPS for maximum security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Ready</h3>
              <p>Track clicks and engagement with built-in analytics (coming soon)</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Custom URLs</h3>
              <p>Create memorable custom URLs that reflect your brand</p>
            </div>
          </div>
    </div>
  );
}

export default Customize;
