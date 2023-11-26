import { useState } from "react";

function Clock() {
    var Clk = new Date();
    var utimes = Clk.toLocaleString();
    function updateTime(){
    // var utimes = Clk.toLocaleString();
    utime(utimes);
}

setInterval(updateTime, 1000);
const [ctime, utime] = useState(utimes);

    return(
        <>
        {ctime}
        {/* <button onClick={updateTime}>Click ME</button> */}
        </>
    )
 }

 export default Clock;