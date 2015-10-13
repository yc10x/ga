/**
 * Created by caiying on 13/10/15.
 */
import gm from 'gm';

export default new class {
    outputs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
    finalSize = 640;
    globalOffset = 8;
    paddingSize = 12;
    backgroud = '../assets/bg.jpg';

    draw = async(inputs, artifact) => {
        try {
            let outlineSize = this.finalSize - this.globalOffset * 2;
            let imgSize = inputs.length > 4 ? ((outlineSize - 4 * this.paddingSize) / 3) : ((outlineSize - 3 * this.paddingSize) / 2);
            for(let i = 0;i < inputs.length;i++) {
                await this.resize(inputs[i], this.outputs[i], imgSize);
            }

            let gens = [];  
            for(let j = (inputs.length - 1);j >= 0;j--) {
                let colSize = inputs.length > 4 ? 3 : 2;
                let rowSize = Math.ceil(inputs.length / colSize);
                let yOffset = (rowSize - Math.ceil((inputs.length - j) / colSize)) * (imgSize + this.paddingSize);

                if(rowSize < colSize) {
                    yOffset += (colSize - rowSize) * imgSize / 2;
                }
                let xOffset = (colSize - (inputs.length -  j - 1) % colSize - 1) * (imgSize + this.paddingSize);

                if((inputs.length % colSize !== 0 && (inputs.length - j) > (rowSize - 1) * colSize)) {
                    xOffset -= ((colSize - inputs.length % colSize) * imgSize) / 2 + this.paddingSize;
                }
                gens.push([`+${this.globalOffset + this.paddingSize + xOffset}+${this.globalOffset + this.paddingSize + yOffset}`, this.outputs[j]]);
            }
            await this.generate(gens, artifact);
        } catch(err) {
            console.log('1111' + err);
        }
    };

    resize = async(input, output, size) => new Promise((resolve, reject) => {
        gm(input).resize(size, size, '!').write(output, function (err) {
            if(err) { return reject(err); }
            resolve();
        });
    });

    generate = async(magics, artifact) => new Promise((resolve, reject) => {
        let cmd = gm().in('-page', '+0+0').in(this.backgroud);
        for(let i = 0;i < magics.length;i++) {
            cmd.in('-page', String(magics[i][0])).in(String(magics[i][1]));
        }
        cmd.mosaic().write(artifact, function (err) {
            if (err) { return reject(err); }
            resolve();
        });
    });
}