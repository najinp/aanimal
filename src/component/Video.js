import YouTube from 'react-youtube';

const Video = () => {

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            loop: 1,
            mute: 1,
            playlist: "66-G4MlMwRI",
            paused: 1,
        },
    }



    return (
        <section className="Video">
            <p>저희 ‘SPCA’는 언제나 세심한 손길과
                정성어린 진료로 반려동물과 보호자의 행복을 함께 지켜나가겠습니다.
            </p>
            <h2>마음이 통하는 <span>SPCA</span></h2>
            <div className="container">
                <div className="movie">
                    <YouTube videoId="66-G4MlMwRI" opts={opts} className='u' />
                </div>

            </div>
        </section>
    )
}

export default Video;