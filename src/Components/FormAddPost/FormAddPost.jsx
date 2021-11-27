import React, { useState } from 'react';
import './FormAddPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera,faFolderOpen ,faImage, faFire, faRecycle, faUser, faCopyright, faTint, faMicrophone, faEllipsisH, faGlobe, faSortDown, faSmile, faSmileWink, faSmileBeam} from '@fortawesome/free-solid-svg-icons';

let uuid = 2;

const NewFeeds = ({postLists, setPostLists, showAdd, setShowAdd, currentPost, setCurrentPost, post, setPost}) => {

    const onChangeText = (e) =>{
        setCurrentPost({...currentPost , text: e.target.value})
    }

    const onChangeImage = (event) => {
        // const reader = new FileReader()
        // reader.readAsDataURL(event.target.files[0]);
        // reader.onload = () => {
        //     if(reader.readyState === 2) {
        //         setCurrentPost({...currentPost , img: reader.result})
        //     }
        // }
        var url = URL.createObjectURL(event.target.files[0]);
        setCurrentPost({...currentPost , img:url})
    }

    const AddStatus = () => {
        setCurrentPost({...currentPost, id: uuid})
        setCurrentPost({...currentPost, disabledLike: true})
        uuid = uuid + 1
        setPostLists([currentPost, ...postLists])
        setShowAdd(!showAdd)
        setCurrentPost({
            id: uuid,
            text: '',
            img : '',
            like: 0,
            comment: [],
            disabledLike: true,
            showLike : false,
            showfixDel: false
        })
        // x.splice(index, 1, pos1) pos1 là bài muốn chèn vào tại vị trí index
    }

    return (
        <div>
            <div className="feed">
                <div className="storyReel">
                    <div className="story" style={{backgroundImage: `url('./fb/images/cute2.jpg')`}}>
                    </div>
                </div> 
                <div className="story" style={{backgroundImage: `url('./fb/images/cute2.jpg')`}}>
                    <img
                        className="user__avatar story__avatar"
                        src="./fb/images/cute.jpg"
                        alt=""
                    />
                    <h5>Nguyễn Mạnh Tuân</h5>
                </div>
                <div className="story" style={{backgroundImage: `url('./fb/images/cute2.jpg')`}}>
                    <img
                        className="user__avatar story__avatar"
                        src="./fb/images/cute.jpg"
                        alt=""
                    />
                    <h5>Đỗ Thu Thảo</h5>
                </div>
                <div className="story" style={{backgroundImage: `url('./fb/images/cute2.jpg')`}}>
                    <img
                        className="user__avatar story__avatar"
                        src="./fb/images/cute.jpg"
                        alt=""
                    />
                    <h5>Nguyễn Đức</h5>
                </div>
                <div className="story" style={{backgroundImage: `url('./fb/images/cute2.jpg')`}}>
                    <img
                        className="user__avatar story__avatar"
                        src="./fb/images/cute.jpg"
                        alt=""
                    />
                    <h5>Nguyễn Giang</h5>
                </div>
            </div>
            <div className="post__news">
                <div className="click__post">
                    <div>
                        <img
                            className="user__avatar1"
                            src="./fb/images/avata.jpg"
                            alt = ""
                        />
                    </div>
                    <div>
                        <button onClick={() => setShowAdd(!showAdd)}>Trang ơi, bạn đang nghĩ gì?</button>
                    </div>
                </div>
                <div className="post__line"><hr/></div>
                <div className="material__icons">
                    <div className="icons__text">
                        <div className="color1"> <FontAwesomeIcon  icon={faCamera}/></div>
                        <p>Video trực tiếp</p>
                    </div>
                    <div className="icons__text">
                    <div className="color2"> <FontAwesomeIcon  icon={faImage}/></div>
                        <p>Ảnh/Video</p>
                    </div>
                    <div className="icons__text">
                    <div className="color3"> <FontAwesomeIcon  icon={faSmileBeam}/></div>
                        <p>Cảm xúc/Hoạt động</p>
                    </div>
                </div>

                <div>
                    {showAdd ? (
                        <div>
                            <div id="dialog_base"></div>
                            <div className="post__status">
                                <div className="header__post">
                                    <span>Tạo bài viết</span>
                                    <span onClick={() => setShowAdd(false)} className="close">x</span>
                                </div>
                                <div className="post__line"><hr/></div>
                                <div className="personal">
                                    <div>
                                        <img
                                            className="user__avatar1"
                                            src="./fb/images/avata.jpg"
                                            alt = ""
                                        />
                                    </div>
                                    <div className="post__option">
                                        <p>Nguyễn Huyền Trang</p>
                                        <button className="btn__regime">
                                            <FontAwesomeIcon icon ={faGlobe}/>
                                            <p>Công khai</p>
                                            <div className="sort__down">
                                                <FontAwesomeIcon icon ={faSortDown}/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="write__tus">
                                    <textarea wrap="on" name="" id=""  rows="6" placeholder="Bạn đang nghĩ gì?" onChange={onChangeText} value={currentPost.text}></textarea>
                                    
                                    {/* <div contentEditable style={{backgroundColor: "red"}} ></div> */}
                                    <div className="image-box">
                                        <img className="shape-image" src={currentPost.img} alt="" />
                                    </div>
                                </div>
                                <div className="sticker">
                                    <div className="choose__sticker">Aa</div>
                                    <div className="choose__icon">
                                        <FontAwesomeIcon icon={faRecycle}/>
                                    </div>
                                </div>
                                <div className="add__picture">
                                    <p>Thêm vào bài viết</p>
                                    <div className="add__choosen1">
                                        <button><FontAwesomeIcon icon={faFolderOpen}/></button>
                                        <input type="file" name="myfile" onChange={onChangeImage}/>
                                    </div>
                                    <div className="add__choosen2 hover">
                                        <FontAwesomeIcon icon={faUser}/>
                                    </div >
                                    <div className="add__choosen3 hover">
                                        <FontAwesomeIcon icon={faCopyright}/>
                                    </div>
                                    <div className="add__choosen4 hover">
                                        <FontAwesomeIcon icon={faTint}/>
                                    </div>
                                    <div className="add__choosen5 hover">
                                        <FontAwesomeIcon icon={faMicrophone}/>
                                    </div>
                                    <div className="add__choosen6 hover1">
                                        <FontAwesomeIcon icon={faEllipsisH}/>
                                    </div>
                                </div>
                                <div className="btn__post">
                                    <button  disabled = { (currentPost.text === "" && currentPost.img === "" ) ? true : false} onClick={AddStatus}>Đăng</button>
                                </div>
                            </div>
                        </div>
                    ):null}
                </div>
            </div>
        </div>
        
        
    );
}

export default NewFeeds;