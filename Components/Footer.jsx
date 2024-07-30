import React from "react";

const Footer = () => {
    const productList = ["Token Features", "Rewards", "Marketplace"];
    const contactList = [
        "cosmofunds@support.com",
        "Contact Us"
    ];
    const usefulLinks = ["Home", "About Us", "Company Bio"];

    return (
        <footer className="text-center text-white bg-black lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            CosmoFunds
                        </h6>
                        <p className="text-left">
                            Effortlessly create and manage your crowdfunding campaigns with us,<br />
                            and enjoy a completely hassle-free experience.
                        </p>
                    </div>

                    <div>
                        <h6 className="mb-4 font-semibold uppercase text-center md:text-left">
                            Products
                        </h6>
                        {productList.map((item, index) => (
                            <p className="mb-4" key={index}>
                                <a href="#!" className="text-white hover:text-gray-400">{item}</a>
                            </p>
                        ))}
                    </div>

                    <div>
                        <h6 className="mb-4 font-semibold uppercase text-center md:text-left">
                            Useful Links
                        </h6>
                        {usefulLinks.map((link, index) => (
                            <p className="mb-4" key={index}>
                                <a href="#!" className="text-white hover:text-gray-400">{link}</a>
                            </p>
                        ))}
                    </div>

                    <div>
                        <h6 className="mb-4 font-semibold uppercase text-center md:text-left">
                            Contact
                        </h6>
                        {contactList.map((contact, index) => (
                            <p className="mb-4" key={index}>
                                <a href={`mailto:${contact}`} className="text-white hover:text-gray-400">{contact}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-black p-6 text-center">
                <span>© 2024 Copyright: </span>
                <a className="font-semibold text-white hover:text-gray-400" href="https://tailwind-elements.com/">
                    CosmoFunds
                </a>
            </div>
        </footer>
    );
};

export default Footer;
