import React from 'react';

const PresentationsSlides: React.FC = () => {
    return (
        <div className="resume-section-content">
            <h2 className="mb-5 text-2xl font-bold">Présentation</h2>

            <div className="accordion" id="accordionExample">
                {/* Accordéon pour la présentation en français */}
                <div className="accordion-item border border-gray-200 rounded-md mb-4">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-t-md hover:bg-gray-200 focus:outline-none"
                            type="button"
                            data-accordion-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <img
                                className="w-10 h-10 mr-2"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
                                alt="Présentation en français"
                            />
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-accordion-parent="#accordionExample"
                    >
                        <div className="accordion-body p-4">
                            <iframe
                                className="w-full"
                                src="https://docs.google.com/presentation/d/e/2PACX-1vQG4PRXZgg_wtEGMqc6mvGkAnrosvYw7CK8ZAWPHpA1SC0ScvPUMVlfaWZpEuFaW-hHufKrSSe_6QpP/embed?start=true&loop=true&delayms=2000"
                                frameBorder="0"
                                width="960"
                                height="569"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Accordéon pour la présentation en anglais */}
                <div className="accordion-item border border-gray-200 rounded-md mb-4">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-t-md hover:bg-gray-200 focus:outline-none"
                            type="button"
                            data-accordion-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <img
                                className="w-10 h-10 mr-2"
                                src="https://negricases.com/wp-content/uploads/2019/12/language-english.png"
                                alt="Présentation en anglais"
                            />
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-accordion-parent="#accordionExample"
                    >
                        <div className="accordion-body p-4">
                            <iframe
                                className="w-full"
                                src="https://docs.google.com/presentation/d/e/2PACX-1vQJBgIeN6q3-OeU6uWTutCXzCHzcIGTLsP7vW7tni4vw9duA5e0HVk8nAND-jUePPdB86-56EURlcat/embed?start=true&loop=true&delayms=2000"
                                frameBorder="0"
                                width="960"
                                height="569"
                                allowFullScreen
                            ></iframe>
                            <br />
                            <p className="mt-2">
                                Partner:{' '}
                                <a
                                    href="https://www.linkedin.com/in/valentin-motuel-52395a227/?originalSubdomain=fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    Valentin MOTUEL
                                </a>
                            </p>
                            <p>
                                Little fact sheet:{' '}
                                <a
                                    href="assets/BerachemMARKRIA_ValentinMOTUEL_FactSheet (1).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    Download
                                </a>
                                <img
                                    className="inline-block w-6 h-6 ml-2"
                                    src="assets/img/factsheet.png"
                                    alt="Document"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-4">
                Réalisées avec l'aide de M.{' '}
                <a
                    href="https://www.linkedin.com/in/ilias-gaillot-b9281b18/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    Ilias GAILLOT
                </a>
                .
            </p>
        </div>
    );
};

export default PresentationsSlides;
