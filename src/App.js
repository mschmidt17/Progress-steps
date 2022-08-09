import React, { useState } from 'react';
import './App.css';



export default function App() {
    const [selectedItemId, setSelectedItemId] = useState(1)
    const data = [
        { id: 1, content: '1' },
        { id: 2, content: '2' },
        { id: 3, content: '3' },
        { id: 4, content: '4' }
    ]

    const handleNext = () => {
        let newSelectedItemId
        if (selectedItemId > data.length) {
          newSelectedItemId = data.length
        } else {
          newSelectedItemId = selectedItemId + 1
        }
        setSelectedItemId(newSelectedItemId)
    };
    
    const handlePrev = () => {
        let newSelectedItemId
        if (selectedItemId < 1) {
          newSelectedItemId = 1
        } else {
          newSelectedItemId = selectedItemId - 1
        }
        setSelectedItemId(newSelectedItemId)
    };
    
    const handleCircleClick = (item) => {
        setSelectedItemId(item.id)
    }

    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress" style={{width: `${((selectedItemId - 1) / (data.length - 1)) * 100}%`}}></div>
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`circle ${selectedItemId > item.id
                                ? 'active'
                                : selectedItemId == item.id && 'current'
                            }`}
                            onClick={() => handleCircleClick(item)}
                        >
                        {item.content}
                        </div>
                    ))}
            </div>
            <div className = "containerbtn">
                <button onClick={handlePrev} className="btn" id='prev' disabled={selectedItemId===1? true: false}>Prev</button>
                <button onClick={handleNext} className="btn" id='next' disabled={selectedItemId===4? true: false}>Next</button>
            </div>
        </div>
    )
};

