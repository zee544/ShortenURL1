import { useState } from "react";
import axios from "axios";
import "./customize.css";

function Customize() {
  const [longUrl, setLongUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortId, setShortId] = useState("");

  const createShort = async () => {
    const res = await axios.post("http://localhost:5001/shorten", {
      longUrl,
      custom,
    });

    setShortUrl(res.data.shortUrl);

    const id = res.data.shortUrl.replace("http://localhost:5001/", "");
    setShortId(id);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter long URL"
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        placeholder="Custom short URL (optional)"
        onChange={(e) => setCustom(e.target.value)}
      />
      <br />
      <br />

      <button onClick={createShort}>Generate Short URL</button>

      {shortId && (
        <p>
          Short URL: <a href={shortUrl}>{shortId}</a>
        </p>
      )}
    </div>
  );
}

export default Customize;
