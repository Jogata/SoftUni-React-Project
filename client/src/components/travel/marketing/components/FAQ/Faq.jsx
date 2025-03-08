import { menuItems } from '../../data';
import { AccordionMenu } from './AccordionMenu';
import './faq.css';

export function Faq() {
  return (
    <div className='accordion-wrapper'>
      <h1>Frequently Asked Questions</h1>
      <AccordionMenu items={menuItems} />
    </div>
  );
}