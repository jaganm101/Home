import { useState } from 'react';
import { Door } from '../types/Index';

const doors: Door[] = [
    // { image: '/Home/images/green_door.png', alt: 'Main Door', description: 'முக்கிய கதவு' },
    { image: '/Home/images/green_door.png', alt: 'Master Bedroom Door', description: 'மாட்டியில் உள்ள படுக்கையறையின் கதவு' },
    { image: '/Home/images/white_door.png', alt: 'First Bedroom Door', description: 'முதல் படுக்கையறை கதவு' },
    { image: '/Home/images/bathroom_door.png', alt: 'bathrrom', description: 'மேலும் கீழும் உள்ள குளியலறையின் கதவு' },
    { image: '/Home/images/white_door.png', alt: 'First Bedroom Door', description: 'இரண்டாவது படுக்கையறையின் கதவு' },
];
function DoorDetails() {
    const [selectedDoor, setSelectedDoor] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setSelectedDoor(index);
    };

    const handleMouseLeave = () => {
        setSelectedDoor(null);
    };

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">வீட்டின் கதவுகள்</h2>
            <div className="image-gallery d-flex justify-content-center flex-wrap">
                {doors.map((door, index) => (
                    <div
                        key={index}
                        className={`image-card m-3 position-relative overflow-hidden rounded-lg shadow-lg ${selectedDoor === index ? 'active' : ''
                            }`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{ width: '250px', cursor: 'pointer' }}
                    >
                        <img
                            src={door.image}
                            alt={door.alt}
                            className="img-fluid w-100 h-100 object-cover transition-transform duration-300"
                            style={{ transform: selectedDoor === index ? 'scale(1.05)' : 'scale(1)' }}
                        />
                        <div
                            className={`caption position-absolute bottom-0 left-0 w-100 text-center p-2 bg-dark text-white opacity-80 transition-opacity duration-300 ${selectedDoor === index ? 'opacity-100' : 'opacity-80'
                                }`}
                        >
                            {door.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoorDetails;
