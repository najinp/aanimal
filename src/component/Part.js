import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

const ITM = [
    { id: 1, content: "줄기세포 치료", des: "당신의 반려동물, 줄기세포 치료가 필요할까요?" },
    { id: 2, content: "건강검진", des: "메디펫은 건강검진에 따른 영양관리를 함께 합니다." },
    { id: 3, content: "자연치아 살리기", des: "치주염: 잇몸 속 치석까지 제거하는 스케일링이 필요합니다." },
    {
        id: 4, content: "통증재활", des: "최신 레이저 장비와 수중 재활치료, 각종 재활치료 장비 세팅"
    }
]


const Part = () => {

    return (
        <section className="Part">
            <div className="inner">
                <h2>검진 과목</h2>
            </div>
            <container>
                <div class="item">A</div>
                <div class="item">B</div>
                <div class="item">C</div>
                <div class="item">D</div>
            </container>
            {/* {ITM.map(nemo => {
                return (<div className="container" >
                    <figure className={'itm0' + nemo.id}>
                        <img src={process.env.PUBLIC_URL + "/assets/image/con0" + nemo.id + ".jpg"} alt="" />
                    </figure>
                </div>
                )
            })} */}
        </section >
    )
}

export default Part;