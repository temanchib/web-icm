import { v4 as uuidv4 } from 'uuid';
import image1 from '../images/image1.PNG';
import image2 from '../images/image2.PNG';
import image3 from '../images/image3.PNG';
import image4 from '../images/image4.PNG';
import image5 from '../images/image5.PNG';
import image6 from '../images/image6.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Sunday Service',
    desc:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: image1,
  },
  {
    id: uuidv4(),
    name: 'Community Cell',
    desc:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: image2,
  },
  {
    id: uuidv4(),
    name: 'Discipleship PMK',
    desc:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: image3,
  },
  {
    id: uuidv4(),
    name: 'Bimbingan Pranikah',
    desc:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: image4,
  },
  {
    id: uuidv4(),
    name: 'Sepakat Berdoa',
    desc:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: image5,
  },
  {
    id: uuidv4(),
    name: 'Komunitas Opa & Oma',
    desc:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: image6,
  },
];

export default projects;
