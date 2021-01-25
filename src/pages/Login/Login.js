import React from "react";
import "./Login.css"

class Login extends React.Component {
    render() {
        return (
            <section class="login_page">
                <main class="login_container">

                    <div class="login_form">
                        <h1>Westagram</h1>

                        <div class="input_container">
                            <input class="input_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                            <input class="input_password" type="password" placeholder="비밀번호" />
                            <input class="login_button" type="button" value="로그인" />
                        </div>

                        <div class="or_container">
                            <div></div>
                            <h1 class="text_or">또는</h1>
                            <div></div>
                        </div>

                        <div class="facebook_login_link">
                            <a class="facebook_login_text" href="#"><i class="fab fa-facebook-square"></i>Facebook으로 로그인</a>
                            <a href="#" tabindex="0">비밀번호를 잊으셨나요?</a>
                        </div>

                    </div>

                    <div class="has_account">
                        <p class="has_account_content">계정이 없으신가요?
                        <a href="#" tabindex="0">
                                <span class="">가입하기</span>
                            </a>
                        </p>
                    </div>

                    <div class="download_APP">
                        <div>
                            <p>앱을 다운로드하세요.</p>
                        </div>
                        <div class="download_button">
                            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img alt="App Store에서 이용 가능"
                                class="apple_icon"
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png" /></a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D252CCB11-1A79-40CC-AB09-E55D439CD8BB%26utm_content%3Dlo%26utm_medium%3Dbadge"><img
                                    alt="Google Play에서 이용 가능" class="googleplay_icon"
                                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png" /></a>
                        </div>
                    </div>

                </main>
            </section>
        )
    }
}
export default Login;