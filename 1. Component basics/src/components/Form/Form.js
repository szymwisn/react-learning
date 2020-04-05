import React from "react";
import styles from "./Form.module.scss";
import Input from './Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note'
}

const descriptions = {
  twitter: 'favorite Twitter account',
  article: 'Article',
  note: 'Note'
}

class Form extends React.Component {
  state = {
    activeOption: types.twitter
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type
    })
  }

  render() {
    const { activeOption } = this.state;

    return (
      <div className={styles.wrapper}>
        <Title>Add new {descriptions[activeOption]}</Title>
        <form className={styles.form} onSubmit={this.props.submitFn}>
          <label htmlFor={types.twitter}>
            <input
              id={types.twitter}
              type="radio"
              onChange={() => this.handleRadioButtonChange(types.twitter)}
              checked={activeOption === types.twitter}
            />
            {types.twitter}</label>
          <label htmlFor={types.article}>
            <input
              id={types.article}
              type="radio"
              onChange={() => this.handleRadioButtonChange(types.article)}
              checked={activeOption === types.article}
            />
            {types.article}</label>
          <label htmlFor={types.note}>
            <input
              id={types.note}
              type="radio"
              onChange={() => this.handleRadioButtonChange(types.note)}
              checked={activeOption === types.note}
            />
            {types.note}</label>
          <Input
            name='name'
            label={activeOption === types.twitter ? 'Twitter name' : 'Title'}
          />
          {activeOption !== types.note ?
            <Input
              name='link'
              label={activeOption === types.twitter ? 'Twitter link' : 'Link'}
            />
            : null
          }
          {activeOption === types.twitter ?
            <Input
              name='image'
              label='Image'
            />
            : null
          }
          <Input
            tag='textarea'
            name='description'
            label='Description'
            maxLength={120}
          />
          <Button>add new item</Button>
        </form>
      </div>
    )
  }
}

export default Form;
