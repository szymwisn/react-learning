import React from "react";
import AppContext from '../../context';
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
    type: types.twitter,
    title: '',
    link: '',
    image: '',
    description: ''
  }

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form
              autocomplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <label htmlFor={types.twitter}>
                <input
                  id={types.twitter}
                  type="radio"
                  onChange={() => this.handleRadioButtonChange(types.twitter)}
                  checked={type === types.twitter}
                />
                {types.twitter}</label>
              <label htmlFor={types.article}>
                <input
                  id={types.article}
                  type="radio"
                  onChange={() => this.handleRadioButtonChange(types.article)}
                  checked={type === types.article}
                />
                {types.article}</label>
              <label htmlFor={types.note}>
                <input
                  id={types.note}
                  type="radio"
                  onChange={() => this.handleRadioButtonChange(types.note)}
                  checked={type === types.note}
                />
                {types.note}</label>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name='title'
                label={type === types.twitter ? 'Twitter name' : 'Title'}
              />
              {type !== types.note ?
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name='link'
                  label={type === types.twitter ? 'Twitter link' : 'Link'}
                />
                : null
              }
              {type === types.twitter ?
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name='image'
                  label='Image'
                />
                : null
              }
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag='textarea'
                name='description'
                label='Description'
                maxLength={120}
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}

export default Form;
