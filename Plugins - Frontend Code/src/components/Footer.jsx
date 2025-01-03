import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="bg-gray-900 text-white py-8 ">
            <div className="container mx-auto px-4 flex flex-wrap justify-around lg:justify-between items-start">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-6 lg:mb-0">
                    <h5 className="font-bold mb-2 text-yellow-500">TOP ARTISTS</h5>
                    <ul className="space-y-1">
                        <li className="hover:text-yellow-300 transition duration-300">Arjit Singh</li>
                        <li className="hover:text-yellow-300 transition duration-300">Badshah</li>
                        <li className="hover:text-yellow-300 transition duration-300">Atif Aslam</li>
                        <li className="hover:text-yellow-300 transition duration-300">Justin Bieber</li>
                        <li className="hover:text-yellow-300 transition duration-300">Lata Mangeshkar</li>
                        <li className="hover:text-yellow-300 transition duration-300">Sanam Puri</li>
                        <li className="hover:text-yellow-300 transition duration-300">Anupam Ray</li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-6 lg:mb-0">
                    <h5 className="font-bold mb-2 text-yellow-500">BROWSE</h5>
                    <ul className="space-y-1">
                        <li className="hover:text-yellow-300 transition duration-300">New Releases</li>
                        <li className="hover:text-yellow-300 transition duration-300">Featured Playlists</li>
                        <li className="hover:text-yellow-300 transition duration-300">Weekly Top Songs</li>
                        <li className="hover:text-yellow-300 transition duration-300">Top Artists</li>
                        <li className="hover:text-yellow-300 transition duration-300">Top Charts</li>
                        <li className="hover:text-yellow-300 transition duration-300">Top Radios</li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-6 lg:mb-0">
                    <h5 className="font-bold mb-2 text-yellow-500">DEVOTIONAL SONGS</h5>
                    <ul className="space-y-1">
                        <li className="hover:text-yellow-300 transition duration-300">Krishna Bhajan</li>
                        <li className="hover:text-yellow-300 transition duration-300">Mahamrityunjaya Mantra</li>
                        <li className="hover:text-yellow-300 transition duration-300">Ganesh Ji Ki Aarti</li>
                        <li className="hover:text-yellow-300 transition duration-300">Hanuman Chalisa</li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-6 lg:mb-0">
                    <h5 className="font-bold mb-2 text-yellow-500">LANGUAGE</h5>
                    <ul className="space-y-1">
                        <li className="hover:text-yellow-300 transition duration-300">Hindi Songs</li>
                        <li className="hover:text-yellow-300 transition duration-300">Punjabi Songs</li>
                        <li className="hover:text-yellow-300 transition duration-300">Telugu Songs</li>
                        <li className="hover:text-yellow-300 transition duration-300">Tamil Songs</li>
                        <li className="hover:text-yellow-300 transition duration-300">Kannada Songs</li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-6 lg:mb-0">
                    <h5 className="font-bold mb-2 text-yellow-500">ARTIST ORIGINALS</h5>
                    <ul className="space-y-1">
                        <li className="hover:text-yellow-300 transition duration-300">Zaeden - Dooriyan</li>
                        <li className="hover:text-yellow-300 transition duration-300">Raghav - Sufi</li>
                        <li className="hover:text-yellow-300 transition duration-300">SIXK - Dansa</li>
                        <li className="hover:text-yellow-300 transition duration-300">Siri - My Jam</li>
                        <li className="hover:text-yellow-300 transition duration-300">Lost Stories, "Mai Ni Meriye"</li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-6 lg:mb-0">
                    <h5 className="font-bold mb-2 text-yellow-500">COMPANY</h5>
                    <ul className="space-y-1">
                        <li className="hover:text-yellow-300 transition duration-300">About us</li>
                        <li className="hover:text-yellow-300 transition duration-300">Blog</li>
                        <li className="hover:text-yellow-300 transition duration-300">Terms & Privacy</li>
                        <li className="hover:text-yellow-300 transition duration-300">Help & Support</li>
                        <li className="hover:text-yellow-300 transition duration-300">Artist Originals</li>
                    </ul>
                </div>
            </div>
            <center><div>© {year} Plugins copyright claim by Sahin Nayak</div></center>
        </div>
    );
}

export default Footer;
