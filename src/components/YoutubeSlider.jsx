import React, { useState, useCallback, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import axios from 'axios';
import "./css/youtube_button.css"

const API_KEY = 'AIzaSyC6WrX3hjBvtPWMZgT5SSz_m9vwxsVDER0';

function YoutubeSlider() {
    const [videos, setVideos] = useState([]);
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&channelId=UCdtRAcd3L_UpV4tMXCw63NQ&q=서브웨이,라면,햄버거&key=${API_KEY}`
                );
                const items = res.data.items;
                const videoIds = items.map((item) => item.id.videoId);
                setVideos(videoIds);
            } catch (err) {
                console.error('Error fetching videos:', err.message);
            }
        };
        fetchVideos();
    }, []);

    const transitions = useTransition(videos.length ? index : null, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });


    const nextVideo = useCallback(() => {
        setIndex((index + 1) % videos.length);
    }, [index, videos]);

    const prevVideo = useCallback(() => {
        setIndex(index === 0 ? videos.length - 1 : index - 1);
    }, [index, videos]);

    useEffect(() => {
        let interval;
        if (playing) {
            interval = setInterval(() => {
                nextVideo();
            }, 7000);
        }
        return () => clearInterval(interval);
    }, [playing, nextVideo]);

    const togglePlaying = useCallback(() => {
        setPlaying(!playing);
    }, [playing]);

    return (
        <div>
            <button onClick={prevVideo} className="youtube_button">Previous</button>
            <button onClick={nextVideo} className="youtube_button">Next</button>
            <button onClick={togglePlaying} className="youtube_button">
                {playing ? 'Pause' : 'Play'}
            </button>
            <div style={{ position: 'relative', height: '0', paddingBottom: '56.25%' }}>
                {transitions((style, i) => (
                    <animated.iframe
                        key={videos[i]}
                        style={{
                            ...style,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '400%',
                            width: '400%',
                        }}
                        src={`https://www.youtube.com/embed/${videos[i]}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="youtube-player"
                    />
                ))}
            </div>
        </div>
    );
}

export default YoutubeSlider;
