import OrganizationForm from "../Utils/OrganizationForm";
import uniqid from 'uniqid';

export default class WorkExpForm extends OrganizationForm {
  constructor(props) {
    super(props);
    this.title = 'Work experience';
  }
  getItem(e) {
    const container = e.currentTarget.parentNode.parentNode;
    const id = container.getAttribute('item-id');
    const [title, time, organization] = Array.from(
      container.querySelectorAll('input[type="text"]')
    ).map((ele) => ele.value);
    const description = container.querySelector('textarea').value;
    return { title, time, organization, description, id };
  }
  createItem() {
    return {
      title: '',
      time: '',
      organization: '',
      description: '',
      id: uniqid(),
    };
  }
}