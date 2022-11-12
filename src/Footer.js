import React from "react";
import "./App.css";
import logo from "./images/smoothie-pro-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="/">
              <img className="logo" src={logo} alt="Smoothie Pro logo"></img>
            </a>
          </div>
          <div className="footer-info">
            <div className="footer-profiles">
              <h4>Team</h4>
              <p>
                Muhammad Faizan |{" "}
                <a
                  href="https://www.linkedin.com/in/muhammad-faizan-90a063159"
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
              <a href="/about">About</a>
              <br></br>
              <a href="/menu">Menu</a>
              <br></br>
              <a href="/process">Process</a>
              <br></br>
              <a href="/smoothies">Smoothies</a>
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
            <br></br>
            <a
              href="https://www.flaticon.com/free-icons/smoothie"
              title="smoothie icons"
            >
              Smoothie icons created by AmethystDesign - Flaticon →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
