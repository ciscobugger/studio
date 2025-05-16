import { useRef, useState, FormEvent } from 'react';
import './Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted", { email, termsChecked });
  };

  return (
    <section className="footer">
      <div className="container">
        <div>
          <div>
            <div className="footer-grid-second">
              <div id="w-node-ce4b46b4-a130-dd05-ffe7-a688d5794769-d5794764" className="flex-space-between">
                <div>
                  <div className="w-form">
                    <form 
                      id="Subscribe-Footer" 
                      name="Subscribe" 
                      className="subscribe-form"
                      onSubmit={handleSubmit}
                      ref={formRef}
                    >
                      <input
                        className="subscribe-field-footer"
                        maxLength={256}
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        id="subscribe"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input 
                        type="submit"
                        className="button-subscribe subscribe"
                        value="Get Notified"
                      />
                      <div className="margin-15px">
                        <div className="checkbox-container">
                          <label htmlFor="termsCheckbox" className="checkbox-field">
                            <input
                              type="checkbox"
                              id="termsCheckbox"
                              name="terms"
                              checked={termsChecked}
                              onChange={() => setTermsChecked(!termsChecked)}
                              className="original-checkbox"
                            />
                            <div className="custom-checkbox"></div>
                            <span className="checkbox-label-footer">
                              I agree to the <a href="#" className="white-link" onClick={(e) => e.stopPropagation()}>Terms &amp; Conditions</a>
                            </span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div id="w-node-ce4b46b4-a130-dd05-ffe7-a688d579477c-d5794764">
                <div>
                  <div className="footer-title">Sitemap</div>
                  <div className="navigation-flex">
                    <a href="/" className="button-line">
                      <div>Home</div>
                      <div className="line-bottom"></div>
                    </a>
                    <a href="/work" className="button-line">
                      <div>work</div>
                      <div className="line-bottom"></div>
                    </a>
                    <a href="/about" className="button-line">
                      <div>About</div>
                      <div className="line-bottom"></div>
                    </a>
                    <a href="/blog" className="button-line">
                      <div>Blog</div>
                      <div className="line-bottom"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div id="w-node-ce4b46b4-a130-dd05-ffe7-a688d5794791-d5794764">
                <div className="footer-title">Legal</div>
                <div className="navigation-flex">
                  <a href="/info/licensing" className="button-line">
                    <div>Licensing</div>
                    <div className="line-bottom"></div>
                  </a>
                  <a href="/info/changelog" className="button-line">
                    <div>Changelog</div>
                    <div className="line-bottom"></div>
                  </a>
                </div>
              </div>
              
              <div id="w-node-ce4b46b4-a130-dd05-ffe7-a688d57947a1-d5794764">
                <div className="footer-title">Social</div>
                <div className="navigation-flex">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="button-line">
                    <div>Instagram</div>
                    <div className="line-bottom"></div>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="button-line">
                    <div>Linkedin</div>
                    <div className="line-bottom"></div>
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="button-line">
                    <div>Facebook</div>
                    <div className="line-bottom"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="Contact" className="copyright-flex-bottom">
          <div className="copyright-flex">
            <a href="https://github.com/VGsaksham/" className="figma-file-absolute for-copyright">
              <p className="figma-text">Copyright © Digital Innovation Studio — made by Saksham</p>
            </a>
          </div>
          
          <a href="#Top" className="figma-file-absolute for-copyright">
            <p className="figma-text">Back to Top</p>
            <div>
              <div className="button-button-icon relative">
                <div className="buton-icon-svg">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="buton-icon-svg is-absolute">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer; 