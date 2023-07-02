import React, { Component } from 'react';
import GeneralItem from './GeneralItem';
import DefaultAvatar from '../../../assets/images/default-avatar.jpg';
import Section from '../Utils/Section';

export default class GeneralPreview extends Component {
  render() {
    const {
      name,
      title,
      birthday,
      sex,
      phone,
      email,
      address,
      link,
      introduction,
      avatar,
    } = this.props.info;
    const imgSrc = avatar ? URL.createObjectURL(avatar) : DefaultAvatar;
    return (
      <>
        <div className="general">
          <img src={imgSrc} alt="avatar" />
          <div className="name-line">
            <span className="name">{name}</span>
            <span className="title">{title}</span>
          </div>
          <div className="others">
            <GeneralItem
              iconClass="fa-solid fa-cake-candles"
              value={birthday}
            />
            <GeneralItem iconClass="fa-solid fa-user" value={sex} />
            <GeneralItem iconClass="fa-solid fa-phone" value={phone} />
            <GeneralItem iconClass="fa-solid fa-envelope" value={email} />
            <GeneralItem iconClass="fa-solid fa-link" value={link} />
            <GeneralItem iconClass="fa-solid fa-location-dot" value={address} />
          </div>
        </div>
        <Section title='Introduction' onEditBtnClick={this.props.onEditBtnClick}>
          <div className='description'>{introduction}</div>
        </Section>
      </>
    );
  }
}
