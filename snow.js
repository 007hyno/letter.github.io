var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 700;



function Snowfall(x,y,r,s){
    this.x = x; 
    this.y = y; 
    this.r = r;
    this.s = s;
    
    this.render = ()=>{
        ctx.fillStyle="rgba(255, 255, 255, 0.48)";
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fill();
    }
    this.end=()=>{
        if(this.y>canvas.height-2){
            this.y=canvas.height-2;
        }
    }
    this.fall=()=>{
        this.render();
        this.y+=this.s;
        if(this.y > canvas.height-2){
            // console.log(`${this.y}`)
            this.y=0;
        }
        // this.end();
    }
}


var times = 3000;
window.setTimeout(()=>{
}),1000;
var flake = [];
for(var i=0;i<times;i++){
    var x=Math.random()*canvas.width;
    var y=Math.random()*canvas.height;
    // var y=9;
    var r=Math.random()*4;
    var s=(Math.random()*2.5)+1;
    // console.log('ay  a');
    flake.push(new Snowfall(x,y,r,s));
    
}

// var f = new Snowfall(200,4,2,3);



//     show=()=>{
    //         ctx.fillStyle="white";
    //         ctx.beginPath();
    //         ctx.moveTo(x,y);
    //         ctx.arc(x,y,r,0,Math.PI*2);
    //         ctx.fill();
    //     }
    // fall=()=>{
        //     y+=s;
        //     end();
        // }
        /////////////////////////end
        // end=()=>{
            //     if(y>canvas.height-2){
                //         y=canvas.height-2;
                //     }
                // }
                //////////////////////////////extra
                // random=(x,y)=>{
                    //     return Math.floor((Math.random()*y)+x);
                    // }
                    clr=()=>{
                        ctx.clearRect(0,0,canvas.width,canvas.height);
}


run=()=>{
    clr()
    
    // f.render()
    for(var i=0;i<flake.length;i++){
        flake[i].fall();
    }
    requestAnimationFrame(run);
    // show();
    // fall();    
}
run();
window.addEventListener('mousemove',moves);

