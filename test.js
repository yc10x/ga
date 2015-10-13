import ga from './index';

class Test {
  inputs  = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'g.jpg', 'h.jpg', 'i.jpg'];
  outputs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

  async go() {
      await ga.draw(this.inputs.slice(0, 2), 'o2.jpg');
      await ga.draw(this.inputs.slice(0, 3), 'o3.jpg');
      await ga.draw(this.inputs.slice(0, 4), 'o4.jpg');
      await ga.draw(this.inputs.slice(0, 5), 'o5.jpg');
      await ga.draw(this.inputs.slice(0, 6), 'o6.jpg');
      await ga.draw(this.inputs.slice(0, 7), 'o7.jpg');
      await ga.draw(this.inputs.slice(0, 8), 'o8.jpg');
      await ga.draw(this.inputs.slice(0, 9), 'o9.jpg');

    }
}

let test = new Test();
test.go();