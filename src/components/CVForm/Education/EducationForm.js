import OrganizationForm from '../Utils/OrganizationForm';
import uniqid from 'uniqid';

export default class EducationForm extends OrganizationForm {
  constructor(props) {
    super(props);
    this.title = 'Education';
  }
  getItem(e) {
    const container = e.currentTarget.parentNode.parentNode;
    const id = container.getAttribute('item-id');
    const [major, time, organization] = Array.from(
      container.querySelectorAll('input[type="text"]')
    ).map((ele) => ele.value);
    const description = container.querySelector('textarea').value;
    return { major, time, organization, description, id };
  }
  createItem() {
    return {
      major: '',
      time: '',
      organization: '',
      description: '',
      id: uniqid(),
    };
  }
}