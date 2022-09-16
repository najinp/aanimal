const PART = [
    {
        id: 1, category: "줄기세포 치료", title: "당신의 반려동물, 줄기세포 치료가 필요할까요?", link: "/", src: "/assets/image/con01.jpg"
    },
    { id: 2, category: "건강검진", title: "메디펫은 건강검진에 따른 영양관리를 함께 합니다.", link: "/", src: "/assets/image/con02.jpg" },
    { id: 3, category: "자연치아 살리기", title: "치주염: 잇몸 속 치석까지 제거하는 스케일링이 필요합니다.", link: "/", src: "/assets/image/con03.jpg" }
]

const Part2 = () => {
    return (
        <section className="Part2 csc">
            <h2>검진 과목</h2>
            <div className="inner">
                {
                    PART.map(sec => {
                        return (
                            <figure>
                                <div className="box">
                                    <img src={process.env.PUBLIC_URL + sec.src} alt={sec.title} />
                                </div>
                                <div className="font">
                                    <strong>{sec.category}</strong>
                                    <div className="title">{sec.title}</div>
                                </div>

                            </figure>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Part2;