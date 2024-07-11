import React from "react";
import './FooterModule.css';


function Footer() {
  return (
      <div className="footer">
          <div className="language-bar">
              <ul>
                  <li>United States</li>
                  <li>Español (México)</li>
                  <li>العربية</li>
                  <li>Русский</li>
                  <li>简体中文</li>
                  <li>Français (France)</li>
                  <li>한국어</li>
                  <li>Português (Brazil)</li>
                  <li>Tiếng Việt</li>
                  <li>繁體中文 (台灣)</li>
              </ul>
          </div>
          <div className="footer-content">
              <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
              <ul>
                  <li>Internet Service Terms</li>
                  <li>Apple Music & Privacy</li>
                  <li>Cookie Warning</li>
                  <li>Support</li>
                  <li>Feedback</li>
              </ul>
          </div>
      </div>
  );
}

export default Footer;