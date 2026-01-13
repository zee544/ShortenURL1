import { useState } from "react";
import axios from "axios";
import QRCode from "qrcode";
import "./QRGenerator.css";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5001/api/qr";

  const handleGenerate = async () => {
    if (!url) {
      alert("Enter a URL");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API}/generate`, { url });

      const qr = await QRCode.toDataURL(url, {
        width: 220,
        margin: 2,
      });

      setQrImage(qr);
    } catch (error) {
      console.error("ERROR:", error.response?.data || error.message);
      alert("QR generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="qr-gen-wrapper">
      <div className="qr-gen-card">
        <h1 className="qr-gen-head1">Generate QR Code</h1>

        <div className="qr-gen-content">
          <div className="qr-gen-left">
            <input
              className="qr-gen-input"
              type="text"
              placeholder="Paste short or long URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <button onClick={handleGenerate} className="qr-gen-btn" disabled={loading}>
              {loading ? "Generating..." : "Generate QR"}
            </button>

            {qrImage && (
              <div className="qr-gen-result">
                <div className="qr-gen-preview">
                  <img src={qrImage} alt="QR Code" />
                </div>
                <a href={qrImage} download="qr-code.png" className="qr-gen-download">
                  Download QR Code
                </a>
              </div>
            )}
          </div>

          <div className="qr-gen-right">
            <h3>Why Use QR Codes?</h3>
            <p>
              QR codes make sharing URLs easy and efficient. Simply scan the code with any smartphone camera to instantly access the link. Perfect for business cards, flyers, presentations, and digital sharing.
            </p>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="qr-features-grid">
        <div className="qr-feature-card">
          <div className="qr-feature-icon">📱</div>
          <h3>Mobile Friendly</h3>
          <p>Scan QR codes instantly with any smartphone camera</p>
        </div>
        <div className="qr-feature-card">
          <div className="qr-feature-icon">⚡</div>
          <h3>Instant Generation</h3>
          <p>Create high-quality QR codes in seconds</p>
        </div>
        <div className="qr-feature-card">
          <div className="qr-feature-icon">🎨</div>
          <h3>High Quality</h3>
          <p>Crisp, scannable QR codes with optimal contrast</p>
        </div>
        <div className="qr-feature-card">
          <div className="qr-feature-icon">📥</div>
          <h3>Easy Download</h3>
          <p>Download QR codes as PNG images instantly</p>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;