import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>SP</h3>
          </div>
          <div className="footer-info">
            <div className="footer-profiles">
              <h4>Team</h4>
              <p>
                Muhammad Faizan |{" "}
                <a
                  href="https://linkedin.co.uk"
                  target="blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/mfaizan22"
                  target="blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                Yasmine Jarvis |{" "}
                <a
                  href="https://linkedin.co.uk"
                  target="blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/yasminejpj"
                  target="blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                Amy Steel |{" "}
                <a
                  href="https://www.linkedin.com/in/amy-steel-654609113/"
                  target="blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/amy425"
                  target="blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>

            <div className="footer-nav">
              <h4>Explore</h4>
              <a href="/">Home</a>
              <br></br>
              <a href="/about">About</a>
              <br></br>
              <a href="/fruits">Fruits</a>
              <br></br>
              <a href="/recipes">Recipes</a>
            </div>
          </div>
        </div>

        <div className="project-notes">
          <p>
            <a
              href="https://github.com/amy425/smoothie-pro"
              target="blank"
              className="git-project-link"
            >
              View project on GitHub →
            </a>
            <br></br>
            With special thanks to Leo Ho & Kirti Lad!
          </p>
        </div>
      </div>
    </footer>
  );
}
