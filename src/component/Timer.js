import React,{ useEffect } from "react";

const Timer = (props) => {
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log('타이머 돌아가는중');
        },1000)
        /* 타이머도 멈춰주어야함 왜냐면 버튼은 작동하는데 콘솔에 타이머 확인용 콘솔로그는 계속 1초마다 진행됨 */
        return ()=>{
            clearInterval(timer);
            console.log('타이머 종료');
        }
    },[]);
    return (
        <div>
            <span>타이머~~~ 콘솔에서 확인바랍니다</span>
        </div>
    );
};

export default Timer;