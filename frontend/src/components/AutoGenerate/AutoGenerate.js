import { useState } from "react";
import axios from "axios";
 // reuse styles if you want

function AutoGenerate() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [copied, setCopied] = useState(false);

  const createShort = async () => {
    try {
      const res = await axios.post("http://localhost:5001/shorten", {
        longUrl
      });

      setShortUrl(res.data.shortUrl);
      setShortId(res.data.shortId);
      setCopied(false);
    } catch (err) {
      console.error(err);
      alert("Error generating short URL");
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
        <h1 className="head1">Auto URL Shortener</h1>

        <div className="custom-content">
          <div className="custom-left">
            <input
              className="longurl"
              type="text"
              placeholder="Enter long URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
            />

            <button onClick={createShort} className="generate">
              Generate Short URL
            </button>

            {shortId && (
              <div className="result">
                <span>
                  Short URL:{" "}
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
            <h3>Auto Generate</h3>
            <p>
              This option automatically generates a unique short URL for your
              long link. It is fast, simple, and perfect when you don’t need a
              custom name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoGenerate;
