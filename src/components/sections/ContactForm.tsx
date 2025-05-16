import { useState, ChangeEvent, FormEvent } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeline: '',
    budget: '',
    services: {
      brandStrategy: false,
      webDesign: false,
      contentCreation: false,
      digitalMarketing: false,
      other: false
    },
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: { ...formData.services, [name]: checked }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section _50px-top">
      <div className="container">
        <div>
          <div className="main-grid top">
            <div id="w-node-_79b22503-40ff-41b9-4cab-553e0130fd62-c24c36f1">
              <div id="w-node-f9fb9728-4280-c3e9-0e16-d7fd4745966b-c24c36f1" className="small-number">
                Find us
              </div>
              <div className="margin-20px">
                <p>Civil Lines, Ludhiana, Punjab, India</p>
              </div>
              <div className="margin-40px">
                <div className="small-number">Inquiry</div>
                <div className="margin-20px with-flex">
                  <a href="mailto:sakshambhown1920@gmail.com" className="navigation-link for-contact">
                    <div className="button-text-wrapper">
                      <div className="button-text">sakshambhown1920@gmail.com</div>
                      <div className="button-text">sakshambhown1920@gmail.com</div>
                    </div>
                    <div className="line-below"></div>
                  </a>
                  <a href="tel:+916284722026" className="navigation-link for-contact">
                    <div className="button-text-wrapper">
                      <div className="button-text">+91 62847 22026<br /></div>
                      <div className="button-text">+91 62847 22026<br /></div>
                    </div>
                    <div className="line-below"></div>
                  </a>
                </div>
              </div>
            </div>
            
            <div id="w-node-_0fea5c5d-1da2-35f0-d551-b4f29d597942-c24c36f1" className="contact-wrapper">
              <div className="form-block">
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="input-flex">
                    <div className="input-100">
                      <label htmlFor="name" className="field-label-contact big">
                        Full name <span className="small">1/6</span>
                      </label>
                      <input
                        className="text-field-main w-input"
                        maxLength={256}
                        name="name"
                        placeholder="Name Surname"
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-100">
                      <label htmlFor="email" className="field-label-contact big">
                        Email address <span className="small">2/6</span>
                      </label>
                      <input
                        className="text-field-main w-input"
                        maxLength={256}
                        name="email"
                        placeholder="mail@company.com"
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="margin-20px">
                    <div className="input-flex">
                      <div className="input-100">
                        <label htmlFor="timeline" className="field-label-contact big">
                          Timeline <span className="small">3/6</span>
                        </label>
                        <input
                          className="text-field-main w-input"
                          maxLength={256}
                          name="timeline"
                          placeholder="2 weeks"
                          type="text"
                          id="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-100">
                        <label htmlFor="budget" className="field-label-contact big">
                          Budget <span className="small">4/6</span>
                        </label>
                        <input
                          className="text-field-main w-input"
                          maxLength={256}
                          name="budget"
                          placeholder="$500, $2.000"
                          type="text"
                          id="budget"
                          required
                          value={formData.budget}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-100">
                        <label htmlFor="services" className="field-label-contact big">
                          select services <span className="small">5/6</span>
                        </label>
                        <div className="checkbox-flex">
                          <label className="checkbox-field-2">
                            <div className={`checkbox ${formData.services.brandStrategy ? 'w--redirected-checked' : ''}`}></div>
                            <input
                              type="checkbox"
                              name="brandStrategy"
                              id="brandStrategy"
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={formData.services.brandStrategy}
                              onChange={handleCheckboxChange}
                            />
                            <span className="second-label">Brand Strategy</span>
                          </label>
                          <label className="checkbox-field-2">
                            <div className={`checkbox ${formData.services.webDesign ? 'w--redirected-checked' : ''}`}></div>
                            <input
                              type="checkbox"
                              name="webDesign"
                              id="webDesign"
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={formData.services.webDesign}
                              onChange={handleCheckboxChange}
                            />
                            <span className="second-label">Web Design</span>
                          </label>
                          <label className="checkbox-field-2">
                            <div className={`checkbox ${formData.services.contentCreation ? 'w--redirected-checked' : ''}`}></div>
                            <input
                              type="checkbox"
                              name="contentCreation"
                              id="contentCreation"
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={formData.services.contentCreation}
                              onChange={handleCheckboxChange}
                            />
                            <span className="second-label">Content Creation</span>
                          </label>
                          <label className="checkbox-field-2">
                            <div className={`checkbox ${formData.services.digitalMarketing ? 'w--redirected-checked' : ''}`}></div>
                            <input
                              type="checkbox"
                              name="digitalMarketing"
                              id="digitalMarketing"
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={formData.services.digitalMarketing}
                              onChange={handleCheckboxChange}
                            />
                            <span className="second-label">Digital Marketing</span>
                          </label>
                          <label className="checkbox-field-2">
                            <div className={`checkbox ${formData.services.other ? 'w--redirected-checked' : ''}`}></div>
                            <input
                              type="checkbox"
                              name="other"
                              id="other"
                              style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                              checked={formData.services.other}
                              onChange={handleCheckboxChange}
                            />
                            <span className="second-label">Other</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="area-margin">
                    <label htmlFor="message" className="field-label-contact big">
                      More information <span className="small">6/6</span>
                    </label>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        maxLength={5000}
                        placeholder="Hello, I'm looking for a agency to help me out with..."
                        required
                        className="text-field-main area w-input"
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="button-contact left">
                    <button type="submit" className="button full" style={{ backgroundColor: "#2b20ff" }}>Submit Project</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 