import ga from '../src/ga';

class Test {


  async go() {
    let inputs  = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'g.jpg', 'h.jpg', 'i.jpg'];
    
    for(let i = 2;i < 10;i++) {
      await ga.draw(inputs.slice(0, i), `o${i}.jpg`);
    }
  }
}

let test = new Test();
test.go();