import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-my">
                    <h4>Henzo Bragas</h4>
                    <p>
                        Web developer focused on fullstack applications, with experience in <br />
                        building front-end websites and web applications that drive product success.
                    </p>
                    <div className="link-social">
                        <h4>SOCIAL</h4>
                        <div className="button-footer">
                            <button
                                onClick={() => window.open('https://www.linkedin.com/in/henzo-bragas-75b982262/', '_blank')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="30"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#ffffff"
                                        fillRule="evenodd"
                                        d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={() => window.open('https://github.com/HenzoBragas', '_blank')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="30"
                                    viewBox="0 0 128 128"
                                >
                                    <g fill="#ffffff">
                                        <path
                                            fillRule="evenodd"
                                            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                            clipRule="evenodd"
                                        />
                                    </g>
                                </svg>
                            </button>

                            <button onClick={() => window.open('./src/curriculum.pdf', '_blank')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="30"
                                    viewBox="0 0 14 14"
                                >
                                    <g fill="none" stroke="#ffffff" strokeLinecap="round">
                                        <path
                                            strokeLinejoin="round"
                                            d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"
                                        />
                                        <path
                                            strokeLinejoin="round"
                                            d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"
                                        />
                                        <path
                                            strokeLinejoin="round"
                                            d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"
                                        />
                                        <path d="M3.5 8.5h7m-7 2.5h4" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hrr"></div>
                <div className="hr-footer">&copy; 2024. Made by Henzo Bragas</div>
            </footer>
        </>
    );
}

export default Footer;
