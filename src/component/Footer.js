const Footer = () => {
    return (
        <section className="Footer">
            <div className="container">
                <h4>
                    <img src="assets/image/logob.png" alt="" />
                </h4>
                <div className="f_mid">
                    <ul className="m_top">
                        <li>개인정보취급방침</li>
                        <li>이용약관</li>
                        <li>이메일무단수집거부</li>
                    </ul>
                    <ul className="m_bottom">
                        <li>SPCA</li>
                        <li>사업자등록번호 214-07-20996</li>
                        <li>주소 서울특별시 서초구 효령로 384</li>
                        <li>TEL: 02-586-7501</li>
                    </ul>
                </div>
                <ul className="sns">
                    <li> <a href="/"><i className="xi-naver"></i></a>
                    </li>
                    <li>  <a href="/"><i className="xi-facebook"></i></a> </li>
                    <li> <a href="/"><i className="xi-kakaotalk"></i></a>  </li>
                    <li>  <a href="/"><i className="xi-youtube-play"></i></a> </li>
                    <li> <a href="/"><i className="xi-instagram"></i></a>  </li>

                </ul>
            </div>
        </section >
    )
}

export default Footer;