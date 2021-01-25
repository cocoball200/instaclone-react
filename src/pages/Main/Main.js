import React, { Component } from "react";
import "./Main.css";

class Main extends React.Component {
    render() {
        return (

            <div class="westargram_whole_container">
                <nav class="navigation_bar_container">
                    <div class="navigation_bar_column title_nav">
                        <i class="fab fa-instagram"></i>
                        <div>|</div>
                        <div>Westagram</div>
                    </div>

                    <div class="navigation_bar_column input_search_container">
                        <input type="text" class="input_search_bar" value="" placeholder="검색" />
                        <i class="fas fa-search"></i>
                        <div class="searched_id_container">
                            <div class="searched_id_list">
                            </div>
                        </div>
                    </div>
                    <div class="navigation_bar_column nav_icons">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                    </div>
                </nav>
                <main class="main_container">
                    <div class="feed_container">
                        <article class="feed_contents">
                            <div class="feed_header">
                                <img class="round_image"
                                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125347387_665294197692336_6026840706998274426_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=tTXjt-AKBPgAX_lD9lM&tp=1&oh=1400139d1b105c2d08f0a1bd8289d634&oe=602BF316"
                                    alt="profile" />
                                <div>
                                    <p>Sia_fanpage</p>
                                    <p>Sia, fanpage, Korea</p>
                                </div>
                                <i class="fas fa-ellipsis-h settings_icon"></i>
                            </div>
                            <div class="main_image_container">
                                <img class="main-image"
                                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/59163523_155227472178890_919977553715347152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=qQ3sW1xFc_kAX8Cyuyw&tp=1&oh=0f3eeb75a6b8f3eda3a9019bd5aa839e&oe=603189AF"
                                    alt="sia" />
                            </div>
                            <div class="board_container">
                                <div class="icons_contianer">
                                    <i class="fas fa-heart"></i>
                                    <i class="far fa-comment"></i>
                                    <i class="fas fa-external-link-alt"></i>
                                    <i class="far fa-bookmark"></i>
                                </div>
                                <div class="feed_icons_container">
                                    <img class="round_image_small"
                                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125347387_665294197692336_6026840706998274426_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=tTXjt-AKBPgAX_lD9lM&tp=1&oh=1400139d1b105c2d08f0a1bd8289d634&oe=602BF316"
                                        alt="profile" />
                                    <span>Sia님 외 4명이 좋아합니다.</span>
                                </div>
                                <div class="feed_message_container">
                                    <span class="feed_main_id">Sia_fanpage</span>
                                    <span class="feed_message"> hoho!</span>
                                </div>
                                <div class="comment_conatainer">
                                    <div class="comment_list">
                                    </div>
                                    <div class="comment_line"></div>
                                    <form class="comment_write_form">
                                        <textarea aria-label="댓글 달기 " class="comment_input" placeholder="댓글달기..."></textarea>
                                        <button class="comment_submit_button" type="button">게시</button>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                    <aside class="right_whole_container">
                        <div class="main_right_container">
                            <div class="recomandation_profile">
                                <img class="round_image"
                                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125347387_665294197692336_6026840706998274426_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=tTXjt-AKBPgAX_lD9lM&tp=1&oh=1400139d1b105c2d08f0a1bd8289d634&oe=602BF316"
                                    alt="profile" />
                                <div class="own_profile_container">
                                    <p>Sia_fanpage</p>
                                    <p>Sia, fanpage, Korea</p>
                                </div>
                                <div>전환</div>
                            </div>
                            <div class="recomandation_list">
                                <div>
                                    <p>회원님을 위한 추천</p>
                                    <p>모두 보기</p>
                                </div>
                                <div class="recomandation_individual">
                                    <img class="recomandation_image" alt="profile in recomandation list"
                                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/137570839_1757783064387438_3187833843631040402_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=YhbLTIxNKhUAX87QYP2&tp=1&oh=7d018a006603c16ccc4a15b7cdc58e11&oe=60068D26" />
                                    <div>
                                        <span class="user_id">hohohosia</span>
                                        <span class="user_follow_status">hohohosia</span>
                                    </div>
                                    <div>팔로우</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        )

    }
}

export default Main;