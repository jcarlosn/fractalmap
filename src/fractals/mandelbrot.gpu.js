import GPU from 'gpu.js';

const gpu = new GPU();

function createMainKernel(width, height) {
    const fn = function(minX,maxX,minY,maxY, iterations){
        const cx=minX+(maxX-minX)*this.thread.x/(this.constants.width-1);
        const cy=minY+(maxY-minY)*this.thread.y/(this.constants.height-1);
    
        let x=0.0;
        let y=0.0;
        let xx=0;
        let yy=0;
        let xy=0;
        let i=iterations;
    
        while(xx+yy<=4){
            xy=x*y;
            xx=x*x;
            yy=y*y;
            x=xx-yy+cx;
            y=xy+xy+cy;
            i--;
                if(i===0){break;}
          }
    
    
        if(i===0){
            this.color(1,1,1,0);
        }else{
            i=iterations-i;
            const c=3*Math.log(i)/Math.log(iterations-1.0);
            if(c<1){
                this.color(0,0,1*c,1);
            }else if(c<2){
                this.color(0,1*(c-1),1,1);
            }else{
                this.color(1*(c-2),1,1,1);
            }
        }
    };

    return gpu.createKernel(fn,{
        constants:{
            width:width,
            height:height
        },
        argumentTypes: { minX: 'Float', maxX: 'Float', minY: 'Float', maxY: 'Float'},
        output:[width,height],
        graphical:true
    });
}

export default createMainKernel;