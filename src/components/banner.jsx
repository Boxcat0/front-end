import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const images = [
    '시판1.png',
    'https://via.placeholder.com/400x300/6c757d/ffffff',
    'https://via.placeholder.com/400x300/28a745/ffffff',
    'https://via.placeholder.com/400x300/ffc107/000000',
    'https://via.placeholder.com/400x300/dc3545/ffffff',
];

function SlideShow() {
    const [index, setIndex] = useState(0);

    // react-spring useTransition hook을 이용해 index 변경시 슬라이드 애니메이션 실행
    const transitions = useTransition(index, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    const prevImage = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    return (
        <div>
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
            <div style={{ position: 'relative', height: '300px' }}>
                {transitions((style, i) => (
                    <animated.img
                        key={i}
                        style={{
                            ...style,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '200px',
                            width: '85%',
                        }}
                        src={images[i]}
                        alt="slide"
                    />
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
