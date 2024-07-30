import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
    const [campaign, setCampaign] = useState({
        title: "",
        description: "",
        amount: "",
        deadline: "",
    });

    const createNewCampaign = async (e) => {
        e.preventDefault();
        try {
            await createCampaign(campaign);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative">
            <span className="coverLine"></span>
            <img
                src="https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt="Hero Background"
            />
            <div className="relative bg-opacity-75 bg-black">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                                CosmoFunds <br className="hidden md:block" />
                                CrowdFunding Platform
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                Unlock financial support for your innovative projects. CosmoFunds connects you with investors to make your dreams come true.
                            </p>
                            <a
                                href="#"
                                aria-label="Learn more about our services"
                                className="inline-flex items-center font-semibold tracking-wider text-gray-200 hover:text-gray-300 transition-colors duration-200"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-5 h-5 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.293 16.293a1 1 0 0 1 0-1.414L13.586 12 9.293 7.707a1 1 0 0 1 1.414-1.414L15.414 12l-4.707 4.707a1 1 0 0 1-1.414 0z"/>
                                </svg>
                            </a>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Create Your Campaign
                                </h3>
                                <form onSubmit={createNewCampaign}>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="title"
                                            className="block mb-2 text-sm font-medium text-gray-700"
                                        >
                                            Title
                                        </label>
                                        <input
                                            onChange={(e) =>
                                                setCampaign({
                                                    ...campaign,
                                                    title: e.target.value,
                                                })
                                            }
                                            placeholder="Campaign Title"
                                            required
                                            type="text"
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            id="title"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <input
                                            onChange={(e) =>
                                                setCampaign({
                                                    ...campaign,
                                                    description: e.target.value,
                                                })
                                            }
                                            placeholder="Campaign Description"
                                            required
                                            type="text"
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            id="description"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="amount"
                                            className="block mb-2 text-sm font-medium text-gray-700"
                                        >
                                            Target Amount
                                        </label>
                                        <input
                                            onChange={(e) =>
                                                setCampaign({
                                                    ...campaign,
                                                    amount: e.target.value,
                                                })
                                            }
                                            placeholder="Amount"
                                            required
                                            type="text"
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            id="amount"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="deadline"
                                            className="block mb-2 text-sm font-medium text-gray-700"
                                        >
                                            Deadline
                                        </label>
                                        <input
                                            onChange={(e) =>
                                                setCampaign({
                                                    ...campaign,
                                                    deadline: e.target.value,
                                                })
                                            }
                                            required
                                            type="date"
                                            className="w-full h-12 px-4 border border-gray-300 rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            id="deadline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <button
                                            type="submit"
                                            className="w-full h-12 px-6 font-medium tracking-wide text-white bg-black rounded shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        >
                                            Create Campaign
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm text-center">
                                        Create your campaign, raise funds effortlessly!
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
