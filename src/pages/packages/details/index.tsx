import '../../../app/globals.css';

const Details = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto">
                <div className="bg-white p-4 md:p-8">
                    {/* Header */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Japan in 16 Days, 14 Nights in Destination Tour Package
                    </h1>
                    {/* Image */}
                    <div className="mb-6 flex flex-col md:flex-row">
                        {/* Left side image */}
                        <div className="w-full md:w-2/3 pr-0 md:pr-2 mb-2 md:mb-0">
                            <img
                                src="https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F9479%2F347774.jpg&w=1080&q=75"
                                alt="Tour Package Image"
                                className="w-full h-64 object-cover rounded-md"
                            />
                        </div>

                        {/* Right side images */}
                        <div className="w-full md:w-1/3 pl-0 md:pl-2 flex flex-col">
                            <img
                                src="https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F9479%2F262387.jpg&w=1080&q=75"
                                alt="Tour Package Image"
                                className="mb-2 h-32 md:h-64 object-cover rounded-md"
                            />
                            <img
                                src="https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F9479%2F214715.jpg&w=1080&q=75"
                                alt="Tour Package Image"
                                className="h-32 md:h-64 object-cover rounded-md"
                            />
                        </div>
                    </div>


                    {/* Description */}
                    <div className="mb-6">
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam vel nisi eget nisl tristique convallis at sit amet
                            nulla. ...
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <p className="text-xl font-semibold text-green-600">
                            $999.99
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Key Features:</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Accommodation included</li>
                            <li>Guided tours</li>
                            <li>Meals provided</li>
                            {/* Add more features */}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
