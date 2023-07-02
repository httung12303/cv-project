import React, { Component } from 'react';
import GeneralForm from './components/CVForm/General/GeneralForm';
import EducationForm from './components/CVForm/Education/EducationForm';
import uniqid from 'uniqid';
import WorkExpForm from './components/CVForm/WorkExp/WorkExpForm';
import SkillForm from './components/CVForm/Skills/SkillForm';
import CertificationForm from './components/CVForm/Certifications/CertificationForm';
import PrizeForm from './components/CVForm/Prizes/PrizeForm';
import GeneralPreview from './components/CVPreview/General/GeneralPreview';
import EducationPreview from './components/CVPreview/Education/EducationPreview';
import WorkExpPreview from './components/CVPreview/WorkExp/WorkExpPreview';
import SkillPreview from './components/CVPreview/Skills/SkillPreview';
import CertificationPreview from './components/CVPreview/Certifications/CertificationPreview';
import PrizePreview from './components/CVPreview/Prizes/PrizePreview';
import html2pdf from 'html2pdf.js';
import 'normalize.css';
import './styles/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    const general = {
      name: 'Your name',
      sex: 'Male/Female',
      title: 'Are you a student or working?',
      phone: '123 456 789',
      email: 'example@gmail.com',
      birthday: '1/1/2023',
      link: 'https://github.com/you_github',
      address: 'Somewhere',
      introduction: 'Introduce yourself',
      avatar: null,
    };
    const education = [
      {
        major: 'Your major',
        organization: 'Institution',
        time: '2023-?',
        description: 'How did it go?',
        id: uniqid(),
      },
    ];
    const workExp = [
      {
        title: 'Your job',
        time: '2023-?',
        organization: 'Company',
        description: 'How did it go?',
        id: uniqid(),
      },
    ];
    const skills = [{ name: 'What are you good at?', id: uniqid() }];
    const certifications = [
      { description: 'Show something off', time: '2023', id: uniqid() },
    ];
    const prizes = [
      {
        description: 'Show something off',
        time: '2023',
        id: uniqid(),
      },
    ];
    const formVisibility = {
      general: false,
      education: false,
      workExp: false,
      skills: false,
      certifications: false,
      prizes: false,
    };
    this.state = {
      info: { general, education, workExp, skills, certifications, prizes },
      formVisibility,
    };
    this.onSubmitFunction = this.onSubmitFunction.bind(this);
    this.changeVisibilityFunction = this.changeVisibilityFunction.bind(this);
    this.saveCV = this.saveCV.bind(this);
  }
  onSubmitFunction(field) {
    return (value) => {
      const newState = {};
      newState[field] = value;
      this.changeVisibilityFunction(field)();
      this.setState({ info: { ...this.state.info, ...newState } });
    };
  }
  changeVisibilityFunction(field) {
    return () => {
      const value = this.state.formVisibility[field];
      const formVisibility = { ...this.state.formVisibility };
      formVisibility[field] = !value;
      this.setState({ formVisibility });
    };
  }
  saveCV() {
    const cv = document.querySelector('.preview');
    console.log(cv, cv.offsetWidth);
    html2pdf()
      .from(cv)
      .set({
        filename: 'cv.pdf',
        html2canvas: {
          scale: 1,
          width: parseInt(cv.offsetWidth),
        },
        image: { type: 'jpeg', quality: 1 },
      })
      .save();
  }
  render() {
    const { general, education, workExp, skills, certifications, prizes } =
      this.state.info;
    return (
      <>
        <div className="preview">
          <GeneralPreview
            info={general}
            onEditBtnClick={this.changeVisibilityFunction('general')}
          />
          <EducationPreview
            info={education}
            onEditBtnClick={this.changeVisibilityFunction('education')}
          />
          <WorkExpPreview
            info={workExp}
            onEditBtnClick={this.changeVisibilityFunction('workExp')}
          />
          <div className="sub-sections">
            <SkillPreview
              info={skills}
              onEditBtnClick={this.changeVisibilityFunction('skills')}
            />
            <div className="column">
              <CertificationPreview
                info={certifications}
                onEditBtnClick={this.changeVisibilityFunction('certifications')}
              />
              <PrizePreview
                info={prizes}
                onEditBtnClick={this.changeVisibilityFunction('prizes')}
              />
            </div>
          </div>
        </div>
        <GeneralForm
          info={general}
          onSubmit={this.onSubmitFunction('general')}
          visibility={this.state.formVisibility['general']}
        />
        <EducationForm
          info={education}
          onSubmit={this.onSubmitFunction('education')}
          visibility={this.state.formVisibility['education']}
        />
        <WorkExpForm
          info={workExp}
          onSubmit={this.onSubmitFunction('workExp')}
          visibility={this.state.formVisibility['workExp']}
        />
        <SkillForm
          info={skills}
          onSubmit={this.onSubmitFunction('skills')}
          visibility={this.state.formVisibility['skills']}
        />
        <CertificationForm
          info={certifications}
          onSubmit={this.onSubmitFunction('certifications')}
          visibility={this.state.formVisibility['certifications']}
        />
        <PrizeForm
          info={prizes}
          onSubmit={this.onSubmitFunction('prizes')}
          visibility={this.state.formVisibility['prizes']}
        />
        <button
          className="download-btn fa-solid fa-file-arrow-down"
          onClick={this.saveCV}
        ></button>
      </>
    );
  }
}
